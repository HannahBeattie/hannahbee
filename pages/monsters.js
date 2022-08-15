import {
	Grid,
	GridItem,
	Box,
	HStack,
	VStack,
	Text,
	Image,
	useColorModeValue,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Heading,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Flex,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useThemeColors } from '../components/constants'

const monstPath = '/assets/monsters'
const monstCount = 15
const monstUrls = []
for (let ii = 0; ii < monstCount; ii++) {
	monstUrls.push(`${monstPath}/${ii}.${ii === 9 ? 'png' : 'jpeg'}`)
}

export default function Monsters() {
	const cols = useThemeColors()
	const btnRef = React.useRef()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selected, setSelected] = useState(monstUrls[0])
	return (
		<>
			<Box
				backgroundColor={useColorModeValue('black', '')}
				h={'6rem'}
				left='5rem'
				top='0rem'
				right='0'
				position={'absolute'}
			/>
			<HStack
				// backgroundColor={'blue'}
				display={{ base: 'none', md: 'flex' }}
				maxW='100vw'
				w='100vw'
				overflowX='auto'
				// alignItems='stretch'
				alignItems='center'
				flex='1'
				spacing='8'
				p='8'
				// maxH='70vh'
			>
				{monstUrls.map((url, idx) => (
					<Box
						key={`monst-${idx}`}
						minW={'20rem'}
						onClick={() => {
							setSelected(url)
							onOpen()
						}}
					>
						<Image src={url} alt={`monster image number ${idx}`} />
					</Box>
				))}
			</HStack>
			<>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalCloseButton color={'white'} />
						<ModalBody>
							<Box minW={'20rem'} onClick={onOpen}>
								<Image src={selected} alt={`an image of a monster`} />
							</Box>
						</ModalBody>
					</ModalContent>
				</Modal>
			</>

			<VStack
				// backgroundColor={'purple'}
				display={{ base: 'flex', md: 'none' }}
				alignItems='stretch'
				flex='1'
				spacing='8'
				pb='8'
			>
				{monstUrls.map((url, idx) => (
					<Box key={`monst-${idx}`}>
						<Image src={url} alt={`monster image number ${idx}`} />
					</Box>
				))}
			</VStack>
		</>
	)
}
