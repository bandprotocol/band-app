import createReducer from 'reducers/creator'

import { SAVE_COMMUNITY_INFO, SAVE_CT_BALANCE, REMOVE_BALANCE } from 'actions'
import { Map } from 'immutable'

const handleSaveCommunityInfo = (
  state,
  {
    name,
    symbol,
    tokenAddress,
    logo,
    banner,
    description,
    website,
    organization,
    marketCap,
    price,
    last24Hrs,
    totalSupply,
    collateralEquation,
    tcds,
    tcr,
  },
) =>
  state.set(
    tokenAddress,
    Map({
      name,
      tokenAddress,
      symbol,
      logo,
      banner,
      description,
      website,
      organization,
      marketCap,
      price,
      last24Hrs,
      totalSupply,
      collateralEquation,
      tcds,
      tcr,
    }),
  )

const handleSaveCTBalance = (state, { tokenAddress, balance }) =>
  state.setIn([tokenAddress, 'balance'], balance)

const handleRemoveBalance = state =>
  state.map(community => community.delete('balance'))

export default createReducer({
  [REMOVE_BALANCE]: handleRemoveBalance,
  [SAVE_COMMUNITY_INFO]: handleSaveCommunityInfo,
  [SAVE_CT_BALANCE]: handleSaveCTBalance,
})
