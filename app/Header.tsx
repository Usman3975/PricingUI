import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign="center" bg="#6846C1" pt="90px" pb="250px" color="white">
        <Heading>Simple pricing for you business</Heading>
        <Text pt="12px">Plans that are carefully crafted to suit your business</Text>
    </Box>
  )
}
