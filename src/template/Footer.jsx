import React from 'react'
import { Box } from '@chakra-ui/react'

export default function Footer() {
	return (
		<Box
			pos="fixed"
			bottom="0"
			width="100%"
			p={4} bgColor="sandybrown" textAlign="center"
		>
			@TV series web tracker for learning React
		</Box>
	)
}