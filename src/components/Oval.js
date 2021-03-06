import React from 'react'
import { Flex, Text } from 'ui/common'
import colors from 'ui/colors'

export default ({ t, color, bg, size, fontSize, fontWeight }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bg={bg || colors.background.lightGrey}
    style={{
      width: (size || '24') + 'px',
      height: (size || '24') + 'px',
      borderRadius: '50%',
    }}
  >
    <Text
      color={color || colors.purple.normal}
      fontSize={fontSize || 14}
      fontWeight={fontWeight || 'bold'}
      lineHeight="18px"
    >
      {t}
    </Text>
  </Flex>
)
