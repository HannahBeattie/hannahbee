import { Box, Center } from '@chakra-ui/react'
import React, { useLayoutEffect, useRef, useState } from 'react'
import computer from '../../public/assets/float/computer.png'
import rock from '../../public/assets/float/rock.png'
import sock from '../../public/assets/float/sock.png'
// import space from '../../public/assets/float/space.png'
import star from '../../public/assets/float/star.png'
import sun from '../../public/assets/float/sun.png'
import { BouncyWrap } from './Bounce'
import { GrowWrap } from './Grow'

import useWindowSize from '../hooks/useWindowSize'
import Image from 'next/image'

const bounceDir = '/assets/float/'

export default function Space() {
	const divRef = useRef()
	const [layoutSize, setSize] = useState({ w: 300, h: 300 })
	useLayoutEffect(() => {
		if (!divRef.current) {
			return
		}
		setSize({
			w: divRef.current.clientWidth,
			h: divRef.current.clientHeight,
		})
	}, [])

	const winSize = useWindowSize()
	const pad = winSize.width > 720 ? 120 : 40
	const size = {
		width: winSize.width - pad * 2,
		height: layoutSize.h,
	}
	console.log('layoutSize:', layoutSize)
	console.log('winSize:', winSize)
	console.log('size:', size)
	return (
		<Center position='fixed' top='0' left='0' right='0' bottom='0' zIndex='-1'>
			<Box
				ref={divRef}
				h='100vh'
				w='100vw'
				flex='1'
				display='flex'
				justifyContent='center'
				alignItems='center'
				backgroundRepeat='no-repeat'
				backgroundSize='cover'
				backgroundPosition='center'
				backgroundImage='url(/assets/float/space.png)'
			>
				<BouncyWrap size={size} src={bounceDir + 'star.png'} height={30} speed={0.1} />
				<BouncyWrap size={size} src={bounceDir + 'sun.png'} height={14} speed={0.7} />
				<GrowWrap size={size} src={bounceDir + 'computer.png'} height={36} />
				<BouncyWrap size={size} src={bounceDir + 'rock.png'} height={14} />
				<GrowWrap size={size} src={bounceDir + 'sock.png'} height={28} zIndex='2' />
			</Box>
		</Center>
	)
}
