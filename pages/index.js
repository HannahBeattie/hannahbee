import { Box, Heading } from '@chakra-ui/react'
import { useMotionValue } from 'framer-motion'
import Head from 'next/head'
import Hello from '../components/landing/Hello'
import LandingLinks from '../components/landing/LandingLinks'
import LaserBeam from '../components/landing/LaserBeam'
import RainControl from '../components/landing/rainControl'
import Scene from '../components/landing/Scene'
import Scroll from '../components/landing/Scroll'
import Space from '../components/landing/Space'

import styles from '../styles/Home.module.css'

export default function Home() {
	const beamOpacity = useMotionValue(80)
	return (
		<Box className={styles.container}>
			<Head>
				<title>HannahBee</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LaserBeam beamOpacity={beamOpacity} />
			<Space />
			<Hello />

			<LandingLinks />
			<Scroll />
			<RainControl beamOpacity={beamOpacity} />
			<Scene />
		</Box>
	)
}
