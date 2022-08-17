import { Box, Center, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useThemeColors } from '../components/constants'
import Game from '../components/gameoflife/Game'
import NextLink from 'next/link'
import LifeBlurb from '../components/gameoflife/LifeBlurb'
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpDownIcon, PlusSquareIcon } from '@chakra-ui/icons'

export default function Life() {
	return (
		<>
			<Game />
			<Accordion allowToggle flex='1' padding={2} paddingBottom={5}>
				<AccordionItem>
					<AccordionButton>
						<Box flex='1' textAlign='center'>
							Conway's Game of Life
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel>
						<LifeBlurb />
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	)
}
