import React from 'react'
import styled from 'styled-components'
import { Card, Box, Flex, Text, H5 } from 'ui/common'
import TxHashLink from 'components/TxHashLink'

const Field = ({ label, children }) => (
  <Flex my={2} style={{ lineHeight: '24px' }}>
    <Text
      fontSize="14px"
      fontWeight="600"
      color="#4a4a4a"
      textAlign="right"
      style={{ width: 110 }}
      mr={2}
    >
      {label}:
    </Text>
    <Text fontSize="14px">{children}</Text>
  </Flex>
)

const Address = styled(Text).attrs(() => ({
  fontFamily: 'code',
}))`
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  whitespace: nowrap;
`

export default ({
  name,
  banner,
  link,
  organization,
  description,
  address,
  tokenAddr,
}) => (
  <Card variant="dashboard">
    <Flex>
      <Box mr={3}>
        <H5 mt="12px" mb={3} color="#393939">
          DATASET INFORMATION
        </H5>
        <Description>{description}</Description>
      </Box>

      <Box
        ml="auto"
        flex="0 0 260px"
        alignSelf="center"
        style={{ borderLeft: 'solid 1px #f2f4f9' }}
      >
        {/* <Field label="Website">
          {link && new URL(link).hostname}
          <TxHashLink href={link} pl="5px" />
        </Field> */}
        <Field label="Organization">{organization}</Field>
        {/* <Field label="Core Contract">
          <Flex flexDirection="row" alignItems="center">
            <Address>{address}</Address>
            <TxHashLink
              href={`https://kovan.etherscan.io/address/${address}`}
              pl="5px"
            />
          </Flex>
        </Field> */}
        <Field label="ERC-20">
          <Flex flexDirection="row" alignItems="center">
            <Address>{tokenAddr}</Address>
            <TxHashLink
              href={`https://kovan.etherscan.io/address/${tokenAddr}`}
              pl="5px"
            />
          </Flex>
        </Field>
      </Box>
      <Box
        ml={4}
        mr="-14px"
        flex="0 0 280px"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100px',
          borderRadius: '6px',
        }}
      />
    </Flex>
  </Card>
)

const Description = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  -webkit-line-clamp: 4;
  line-height: 1.6;
  font-size: 14px;
`
