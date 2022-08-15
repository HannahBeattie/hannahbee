import {
	Box,
	Button,
	Image,
	Tooltip,
	useColorModeValue,
	useEventListener,
	VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useThemeColors } from './constants'

const bodyUrl = '/assets/slug/body0.png'

const initialParts = {
	Hair: {
		index: 0,
		count: 8,
		path: '/assets/slug/0/hair',
		elemId: 'hair',
		alt: 'a wonderful haircut',
		zIndex: 3,
	},
	Head: {
		index: 0,
		count: 20,
		path: '/assets/slug/1/face',
		elemId: 'head',
		alt: 'an intense facial expression',
		zIndex: 4,
	},
	Glasses: {
		index: 0,
		count: 4,
		path: '/assets/slug/2/glasses',
		elemId: 'glasses',
		alt: 'some cool glasses',
		zIndex: 5,
	},
	Body: {
		index: 0,
		count: 21,
		path: '/assets/slug/3/top',
		elemId: 'body',
		alt: 'an impressive top',
		zIndex: 2,
	},
	Bottom: {
		index: 0,
		count: 5,
		path: '/assets/slug/4/bottoms',
		elemId: 'bottom',
		alt: 'great bottoms',
		zIndex: 2,
	},
	Accessories: {
		index: 0,
		count: 26,
		path: '/assets/slug/5/accessories',
		elemId: 'accessories',
		alt: 'incredible accessories (children?)',
		zIndex: 5,
	},
	Tail: {
		index: 0,
		count: 6,
		path: '/assets/slug/6/tail',
		elemId: 'tail',
		alt: 'that tail though... or a sock',
		zIndex: 2,
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
	const cols = useThemeColors()
	const [part, setPart] = useState(0)
	const partName = partNames[part]
	const [parts, setParts] = useState(initialParts)
	const selected = parts[partName]

	const nextPart = () => setPart(wrapNext(part, partNames.length))
	const nextOutfit = () => {
		setParts({
			...parts,
			[partName]: {
				...selected,
				index: wrapNext(selected.index, selected.count),
			},
		})
	}

	useEventListener('keydown', (evt) => {
		// alert(`keydown!!! wow!! Who woulda thought it!? Not us! (key=${evt.key})`)
		switch (evt.key) {
			case 'ArrowUp':
				setPart(wrapPrev(part, partNames.length))
				break
			case 'ArrowDown':
				nextPart()
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
				nextOutfit()
				break
		}
	})

	return (
		<>
			{/* <Text as='pre' position='absolute' top='7rem' left='1rem'>
				Part = #{part} = {partName} <br />
				{partName} = {JSON.stringify(selected, null, '  ')}
			</Text> */}
			<VStack
				flex='1'
				alignSelf='stretch'
				alignItems='center'
				justifyContent='center'
				bg={useColorModeValue('gray.400', 'purple.900')}
			>
				<Box position='relative' onClick={nextOutfit} cursor='pointer'>
					{Object.entries(parts).map(([name, { alt, index, path, zIndex }]) => (
						<Image
							key={`${name}-${index}`}
							position='absolute'
							src={`${path}${index}.png`}
							zIndex={zIndex}
							alt={alt}
						/>
					))}

					<Image src={bodyUrl} alt='hand-drawn image of a naked cartoon slug' />
				</Box>
				<Tooltip
					label="Use the 'up', 'down', 'left' and 'right' keys
					or click the slug's body to dress him"
					bg={cols.black}
					color={cols.white}
				>
					<Button
						onClick={nextPart}
						position='relative'
						top='-1rem'
						variant={useColorModeValue('solid', 'outline')}
						colorScheme={useColorModeValue('purple', 'pink')}
						minW='10rem'
						zIndex='10'
					>
						{partName.toUpperCase()}
					</Button>
				</Tooltip>
			</VStack>
		</>
	)
}
