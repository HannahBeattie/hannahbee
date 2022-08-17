import React from 'react'
import {
	Box,
	Container,
	Heading,
	Hide,
	HStack,
	Link,
	Spacer,
	StatLabel,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import house from '../../public/assets/spaceDoodles/listeninghouse.png'
import house2 from '../../public/assets/spaceDoodles/house.png'
import satalite from '../../public/assets/spaceDoodles/flyingsat.png'
import satR from '../../public/assets/spaceDoodles/sataliter.png'
import satT from '../../public/assets/spaceDoodles/satalitet.png'
import flip from '../../public/assets/spaceDoodles/fliphouse.png'
import Image from 'next/image'
import { useThemeColors } from '../constants'

function ContactAnimation({ hideSat }) {
	const cols = useThemeColors()
	return (
		<>
			<Box h={'6rem'} left='5rem' top='0rem' right='0' position={'absolute'} />

			<HStack>
				<Box h={'15rem'} w={'15rem'} left='0rem' bottom='3rem' position={'absolute'}>
					<Image src={house} alt={'hand-drawn hand-drawn satalite hosuse'} />
				</Box>
				<Hide below='sm'>
					<Box h={'15rem'} w={'15rem'} left='9rem' bottom='3rem' position={'absolute'}>
						<Image src={house2} alt={'hand-drawn hand-drawn satalite hosuse'} />
					</Box>
				</Hide>
				<Hide below='md'>
					<Box h={'10rem'} w={'10rem'} left='19rem' bottom='3rem' position={'absolute'}>
						<Image src={house} alt={'hand-drawn hand-drawn satalite hosuse'} />
					</Box>
				</Hide>
				<Box h={'10rem'} w={'10rem'} right='0rem' bottom='3rem' position={'absolute'}>
					<Image src={flip} alt={'hand-drawn hand-drawn satalite hosuse'} />
				</Box>

				{!hideSat && (
					<motion.div
						animate={{
							rotate: 360,
							x: [-500, 70, -40, 350, 100, 200, 100],
							y: [-70, -50, 100, -40, -80, 200],
							scale: [1, 1.1, 1],
						}}
						transition={{
							ease: 'linear',
							type: 'smooth',
							repeat: Infinity,
							duration: 32,
						}}
					>
						<Box h={'10rem'} w={'10rem'} alignSelf='flex-end'>
							<Image src={satalite} alt={'hand-drawn satalite'} />
						</Box>
					</motion.div>
				)}
				<Hide below='md'>
					<Box
						h={'7rem'}
						w={'7rem'}
						top='10rem'
						bottom='3rem'
						right={'-1rem'}
						position={'absolute'}
					>
						<Image src={satR} alt={'hand-drawn satalite'} />
					</Box>
				</Hide>
			</HStack>
		</>
	)
}

export default ContactAnimation
