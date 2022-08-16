import { HamburgerIcon } from '@chakra-ui/icons'
import { Hide, IconButton, Link, Menu, MenuButton, MenuList, Show, VStack } from '@chakra-ui/react'

export default function Burger() {
	return (
		<Hide above='md'>
			<Menu>
				<MenuButton
					as={IconButton}
					backgroundColor={'black'}
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
						<Link href='https://github.com/'>Github</Link>
						<Link href='https://www.linkedin.com/feed/'>LinkedIn</Link>
					</VStack>
				</MenuList>
			</Menu>
		</Hide>
	)
}
