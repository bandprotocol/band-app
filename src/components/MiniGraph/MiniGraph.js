import React from 'react'
import { Flex, Card, Text } from 'ui/common'

export default ({ title, value, unit, subValue }) => (
  <Card variant="dashboard" my="4px" style={{ minWidth: 260, minHeight: 120 }}>
    <Flex flexDirection="column">
      <Text py={2} fontSize="14px" fontWeight="900" color="#4a4a4a">
        {title}
      </Text>
      <Text
        mt="8px"
        fontSize="24px"
        letterSpacing="0.1px"
        fontWeight={900}
        color="#5269ff"
      >
        {`${value}`}
        <Text
          ml={2}
          fontSize="18px"
          style={{ display: 'inline-block' }}
          color="#4a4a4a"
          fontWeight="500"
        >
          {unit}
        </Text>
      </Text>
      <Text fontSize="16px" fontWeight="500" lineHeight="2.2em" color="#757575">
        {subValue}
      </Text>
    </Flex>
  </Card>
)
