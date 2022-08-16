import { HamburgerIcon } from '@chakra-ui/icons'
import { Hide, IconButton, Link, Menu, MenuButton, MenuList, Show, VStack } from '@chakra-ui/react'

export default function Burger() {
	return (
		<Hide above='md'>
			<Menu>
				<MenuButton
					as={IconButton}
					backgroundColor={'gray.900'}
					_hover={{ backgroundColor: 'purple.900' }}
					_active={{ backgroundColor: 'orange.900' }}
					icon={<HamburgerIcon />}
					color={'white'}
				/>

				<MenuList>
					<VStack>
						<Link href='/about'>About</Link>
						<Link href='/portfolio'>Portfolio</Link>
						<Link href='/contact'>Contact</Link>
						<Link href='/monsters'>Monsters</Link>
						<Link href='/life'>Conway's game</Link>
					</VStack>
				</MenuList>
			</Menu>
		</Hide>
	)
}
