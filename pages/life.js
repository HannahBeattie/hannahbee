import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
const cols = 39
const rows = 18
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

export default function Blue() {
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
					if (sum < 2 || sum > 3) {
						return 0
					}
					if (sum === 4) {
						return 2
					}
					if (sum === 5) {
						return 1
					}
					if (sum === 3) {
						return 1
					}
					if (sum === 1) {
						return 2
					}
					if (sum === 0) {
						return 2
					}

					return g[i][j]
				})
			})
			return next
		})
	}

	return (
		<>
			<HStack>
				<Button
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
				<Button marginLeft='1rem' onClick={() => setGrid(randomGrid)}>
					Reset
				</Button>
			</HStack>

			<Box p={30}>
				<motion.div
					animate={{
						background: ['#0BC5EA', '#805AD5', '#68D391', '#F6E05E'],
						border: ['#0BC5EA', '#805AD5', '#68D391', '#F6E05E'],
						color: ['#0BC5EA', '#805AD5', '#68D391', '#F6E05E'],
						backgroundColor: ['hsl(0, 100, 50)', 'hsl(240, 100, 50)'],
					}}
					transition={{
						ease: 'linear',

						repeat: Infinity,
					}}
				>
					<VStack spacing='0'>
						{grid &&
							grid.map((rows, i) => (
								<HStack key={`row-${i}`} spacing='0'>
									{rows.map((col, k) => (
										<Box
											borderRadius={grid[i][k] ? 20 : 10}
											key={`cell-${i}-${k}`}
											// className='neon glow '
											w={grid[i][k] ? 5 : 1}
											h={grid[i][k] ? 4 : 2}
											backgroundColor={grid[i][k] ? '' : 'blackAlpha.600'}
											className={grid[i][k] ? 'glow1' : 'test'}
										/>
									))}
								</HStack>
							))}
					</VStack>
					{/* <Box display='flex' flexWrap='wrap'>
						{grid &&
							grid.map((rows, i) =>
								rows.map((col, k) => (
									<Box
										key={'idx'}
										// className='neon glow '
										w={5}
										h={5}
										backgroundColor={grid[i][k] ? '' : 'blackAlpha.600'}
										className={grid[i][k] ? 'glow1' : 'test'}
									/>
								))
							)}
					</Box> */}
				</motion.div>
			</Box>
		</>
	)
}
