import { Box, Container, Link, Text } from '@chakra-ui/react'
import React from 'react'

import NextLink from 'next/link'
import { useThemeColors } from '../constants'

function LifeBlurb() {
	const cols = useThemeColors()
	return (
		<Container
			paddingX='4rem'
			paddingY={'1rem'}
			alignContent={'center'}
			backgroundColor={cols.blurbbk2}
			color={cols.blurbfont}
			className='blur2 '
		>
			<Text fontSize={'sm'} paddingBottom={3} fontWeight={400} lineHeight={7}>
				It is said that coding Conway’s Game of Life is a right of passage for any Dev.
				<br></br>
				<br></br>
				If you haven’t herd of it, Conway’s game is a <b>zero-player game; </b>A cellular
				automation devised by British mathematician John Conway. <br></br>
				First, an initial configuration is coded and catalysed, then the ‘life’ of that
				algorithm continues to evolve and adapt on screen without further input.
				<br></br> <br></br>At first, I was inspired by a tutorial by{' '}
				<NextLink href={'https://github.com/NikValdez/react-gol.git'} passHref>
					<Link textColor={'purple.500'} _hover={{ textColor: 'yellow.800' }}>
						NikValdez
					</Link>
				</NextLink>{' '}
				for an initial algorithm, which I adapted to use Chakra UI elements. I then chose to
				change the algorithm and explored ways I could play with the cell configuration to
				create absurd patterns and effect; Eventually layering three algorithms over
				one-another and toggling classNames, cell dimensions and border-radii to create
				cells that alternately glow, distort and shift shape.
			</Text>
		</Container>
	)
}

export default LifeBlurb
