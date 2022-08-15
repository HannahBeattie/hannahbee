import {
	Box,
	Button,
	Center,
	Text,
	useColorMode,
	useColorModeValue,
	useEventListener,
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import body from '../public/assets/slug/body0.png'

const initialParts = {
	Hair: {
		index: 0,
		count: 8,
		path: '../public/assets/slug/0/hair',
		elemId: 'hair',
	},
	Head: {
		index: 0,
		count: 20,
		path: '../public/assets/slug/1/face',
		elemId: 'head',
	},
	Glasses: {
		index: 0,
		count: 4,
		path: '../public/assets/slug/2/glasses',
		elemId: 'glasses',
	},
	Body: {
		index: 0,
		count: 21,
		path: '../public/assets/slug/3/top',
		elemId: 'body',
	},
	Bottom: {
		index: 0,
		count: 5,
		path: '../public/assets/slug/4/bottoms',
		elemId: 'bottom',
	},
	Accessories: {
		index: 0,
		count: 26,
		path: '../public/assets/slug/5/accessories',
		elemId: 'accessories',
	},
	Tail: {
		index: 0,
		count: 6,
		path: '../public/assets/slug/6/tail',
		elemId: 'tail',
	},
}

const partNames = Object.keys(initialParts)

const wrapNext = (val, count) => {
	let next = val + 1
	if (next >= count) {
		next = 0
	}
	return next
}
const wrapPrev = (val, count) => {
	let next = val - 1
	if (next < 0) {
		next = count - 1
	}
	return next
}

export default function Slugme() {
	const [part, setPart] = useState(0)
	const partName = partNames[part]
	const [parts, setParts] = useState(initialParts)
	const selected = parts[partName]

	useEventListener('keydown', (evt) => {
		// alert(`keydown!!! wow!! Who woulda thought it!? Not us! (key=${evt.key})`)
		switch (evt.key) {
			case 'ArrowUp':
				setPart(wrapPrev(part, partNames.length))
				break
			case 'ArrowDown':
				setPart(wrapNext(part, partNames.length))
				break
			case 'ArrowLeft':
				setParts({
					...parts,
					[partName]: {
						...selected,
						index: wrapPrev(selected.index, selected.count),
					},
				})
				break
			case 'ArrowRight':
				setParts({
					...parts,
					[partName]: {
						...selected,
						index: wrapNext(selected.index, selected.count),
					},
				})
				break
		}
	})

	return (
		<>
			<Box
				backgroundColor={useColorModeValue('pink.200', '')}
				h={'6rem'}
				w={'9rem'}
				left='5rem'
				top='0rem'
				position={'absolute'}
			/>
			<Text as='pre' position='absolute' top='7rem' left='1rem'>
				Part = #{part} = {partName} <br />
				{partName} = {JSON.stringify(selected, null, '  ')}
			</Text>
			<Box justifyContent={'center'} alignSelf={'center'} paddingTop='3rem'>
				<Image alt='hand-drawn image of a naked cartoon slug' src={body} />
			</Box>
		</>
	)
}
