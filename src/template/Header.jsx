import React, { useState } from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Flex p={4}
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      wrap="wrap"
			bgColor="sandybrown"
    >
      <Box mr={4}>
				<Heading>
					<Link to="/">TV Series Tracker</Link>
				</Heading>
			</Box>

    </Flex>
    )
}

export default Header
