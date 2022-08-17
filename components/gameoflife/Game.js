import {
	Box,
	Button,
	Container,
	HStack,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
// const cols = 39
// const rows = 18

const cols = 30
const rows = 12

const randomGrid = () => {
	const grid = []
	for (let i = 0; i < rows; i++) {
		const row = []
		for (let j = 0; j < cols; j++) {
			row.push(Math.floor(Math.random() * 2))
		}
		grid.push(row)
	}
	return grid
}
const positions = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
]

export default function Game() {
	const [grid, setGrid] = useState()
	const [start, setStart] = useState(false)
	const startRef = useRef(start)
	startRef.current = start

	useEffect(() => {
		setGrid(randomGrid())
	}, [])

	function runSimulation() {
		if (!startRef.current) {
			return
		}
		setGrid((g) => {
			const next = g.map((row, i) => {
				return row.map((cell, j) => {
					let sum = 0
					positions.forEach((position) => {
						const x = i + position[0]
						const y = j + position[1]
						if (x >= 0 && x < rows && y >= 0 && y < cols) {
							sum += g[x][y]
						}
					})
					switch (sum) {
						case 0:
							return 0
						case 1:
							return 0
						case 2:
							return 1
						case 3:
							return 0
						case 4:
							return 2
						case 5:
							return 0
						case 6:
							return 1
						case 7:
							return 0
						default:
							return 0
					}
				})
			})
			return next
		})
	}

	return (
		<>
			<Box
				backgroundColor={useColorModeValue('teal.400', 'gray.800')}
				h={'6rem'}
				left='5rem'
				top='0rem'
				right='0'
				position={'absolute'}
			/>

			<Box
				backgroundColor={useColorModeValue('purple.800', 'gray.800')}
				alignSelf={'stretch'}
				flex={1}
			>
				<VStack paddingTop={4}>
					<HStack>
						<Button
							className='glow'
							colorScheme='teal'
							marginLeft='1rem'
							onClick={() => {
								setStart(!start)
								if (!start) {
									startRef.current = true
								}
								setInterval(() => {
									runSimulation(grid)
								}, 1000)
							}}
						>
							{start ? 'Stop' : 'Start'}
						</Button>
						<Button
							className='glow'
							colorScheme='teal'
							marginLeft='1rem'
							onClick={() => setGrid(randomGrid)}
						>
							Reset
						</Button>
					</HStack>
				</VStack>
				<Container paddingBottom={'5rem'}>
					<Box p={30}>
						<VStack spacing='0' h={'4rem'}>
							{grid &&
								grid.map((rows, i) => (
									<HStack key={`row-${i}`} spacing='0'>
										{rows.map((col, k) => (
											<Box
												borderRadius={grid[i][k] ? 20 : 25}
												key={`cell-${i}-${k}`}
												// className='neon glow '
												w={grid[i][k] ? 4 : 3}
												h={grid[i][k] ? 1 : 4}
												className={grid[i][k] ? 'glow' : 'glow1'}
												animationName='example'
												animationDuration='2s'
											/>
										))}
									</HStack>
								))}
						</VStack>

						<VStack spacing='0' h={'7rem'}>
							{grid &&
								grid.map((rows, i) => (
									<HStack key={`row-${i}`} spacing='0'>
										{rows.map((col, k) => (
											<Box
												borderRadius={grid[i][k] ? 20 : 25}
												key={`cell-${i}-${k}`}
												// className='neon glow '
												w={grid[i][k] ? 4 : 3}
												h={grid[i][k] ? 1 : 4}
												className={grid[i][k] ? 'test' : ''}
												animationName='example'
												animationDuration='2s'
											/>
										))}
									</HStack>
								))}
						</VStack>

						<VStack spacing='0' h={'2rem'} paddingBottom={'7rem'}>
							{grid &&
								grid.map((rows, i) => (
									<HStack key={`row-${i}`} spacing='0'>
										{rows.map((col, k) => (
											<Box
												key={`cell-${i}-${k}`}
												// className='neon glow '
												w={grid[i][k] ? 4 : 3}
												h={grid[i][k] ? 1 : 4}
												className={grid[i][k] ? 'test' : 'glow1'}
												animationName='example'
												animationDuration='2s'
											/>
										))}
									</HStack>
								))}
						</VStack>
					</Box>
				</Container>
			</Box>
		</>
	)
}
