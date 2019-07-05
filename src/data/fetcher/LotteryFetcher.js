import BaseFetcher from 'data/BaseFetcher'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { convertToBalls } from 'utils/helper'
import { Utils } from 'band.js'
import { getProvider } from 'data/Providers'

const compareBalls = (a, b) =>
  a.whiteBall1 === b.whiteBall1 &&
  a.whiteBall2 === b.whiteBall2 &&
  a.whiteBall3 === b.whiteBall3 &&
  a.whiteBall4 === b.whiteBall4 &&
  a.whiteBall5 === b.whiteBall5 &&
  a.redBall === b.redBall &&
  a.mul === b.mul

const countLotteryQL = type => `
{
  allDataLotteryFeeds(
    condition: {lotteryType: "${type}"}
    filter: { redBall: { isNull: false } }
  ) {
    totalCount
  }
}
`

export const LotteryCountByTypeFetcher = withRouter(
  class extends BaseFetcher {
    shouldFetch(prevProps) {
      return prevProps.type !== this.props.type
    }

    async fetch() {
      const { type } = this.props

      const {
        allDataLotteryFeeds: { totalCount },
      } = await Utils.graphqlRequest(countLotteryQL(type))

      return totalCount
    }
  },
)

export const LotteyByTCDAddress = withRouter(
  class extends BaseFetcher {
    shouldFetch(prevProps) {
      return prevProps.tcdAddress !== this.props.tcdAddress
    }
    async fetch() {
      const { setNumDataPoints, tcdAddress } = this.props
      const rawData = await Utils.getDataRequest(`/lotteries/${tcdAddress}`)
      setNumDataPoints(rawData.length)
      return rawData
        .map(({ date, key, timestamp, value }) => {
          return {
            time: moment(date),
            lastUpdate: moment(timestamp * 1000),
            keyOnChain: key,
            ...convertToBalls(value),
          }
        })
        .sort((a, b) => {
          if (a.time.isBefore(b.time)) {
            return 1
          }
          return -1
        })
    }
  },
)

export const LotteryProvidersByTCDAddressTimeFetcher = withRouter(
  class extends BaseFetcher {
    shouldFetch(prevProps) {
      return (
        prevProps.tcdAddress !== this.props.tcdAddress ||
        prevProps.keyOnChain !== this.props.keyOnChain
      )
    }

    async fetch() {
      const { tcdAddress, keyOnChain } = this.props
      const reports = await Utils.getDataRequest(`/${tcdAddress}/data-points`, {
        key: keyOnChain,
      })

      if (reports.length === 0) {
        return []
      }

      // Aggregate results and see if the provider has reported maliciously
      const { reportedData } = reports[0]

      return Object.keys(reportedData).map(address => {
        const providerInfo = getProvider(address)
        return {
          name: providerInfo.name,
          image: providerInfo.image,
          status: 'status',
          address,
          lastUpdate: moment(reportedData[address].timestamp * 1000),
          ...convertToBalls(reportedData[address].value),
        }
      })
    }
  },
)
