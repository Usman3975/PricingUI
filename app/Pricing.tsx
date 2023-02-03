import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import checkMarkIcon from "./icons/ckeckMarkicon"

export default function Pricing() {
  return (
    <Box width="950px" m="auto" mt="-200" bg="white" borderRadius={"16px"} overflow="hidden"
    boxShadow={"0px 20px 25px -5px rgb(0, 0, 0, 0.1), 0px 10px 10px -5px rgb(0, 0, 0, 0.04)"}>
        <Flex>
        <Box bg="#d7d2df" p="60px" textAlign="center">
            <Text fontSize="24px" fontWeight="bold">Premium PRO</Text>
            <Heading fontSize="40px">$329</Heading>
            <Text>billed just once</Text>
            <Button mt="20px" w="300px" color="white" bg="#6846C1">Get Started</Button>
        </Box>
        <Box pt="50px" pl="25px">
            <Text mb="15px">
              Access these features when you get this pricing package for your business.
            </Text>
            <HStack mb="15px">
              <Icon as={checkMarkIcon}/>
              <Text>International calling and messaging API</Text>
              </HStack>

              <HStack mb="15px">
              <Icon as={checkMarkIcon}/>
              <Text>Additional phone numbers</Text>
              </HStack>

              <HStack mb="15px">
              <Icon as={checkMarkIcon}/>
              <Text>Automated messages via Zapier</Text>
              </HStack>
              
              <HStack mb="15px">
              <Icon as={checkMarkIcon}/>
              <Text>24/7 support and consulting</Text>
              </HStack>
        </Box>
        </Flex>
    </Box>
  )
}
