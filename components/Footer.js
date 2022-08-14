import { Box, Button, color, HStack, Icon, Link, Spacer, Text, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import linked from '../public/assets/linked.png'
import { useThemeColors } from './constants'

export default function Footer() {
	const butht = '3rem'
	const butwid = '5rem'
	const iconh = 12
	const iconw = 12
	const iconpad = 1
	const cols = useThemeColors()
	return (
		<HStack
			as='footer'
			py={{ base: 3, md: 3 }}
			paddingX={{ base: '0.5rem', md: '1rem' }}
			backgroundColor={cols.black}
		>
			<Box w='100%'>
				<HStack>
					<Box>
						<Tooltip label='Linkedin' bg={cols.black} color={cols.white}>
							<Button
								opacity={'50%'}
								background={cols.button}
								h={butht}
								w={butwid}
								_hover={{
									backgroundColor: cols.black,
									opacity: '100%',
								}}
								_active={{
									backgroundColor: cols.on,
								}}
								as={Link}
								href='https://www.linkedin.com/in/hannah-bee-2b36aa246/'
								isExternal
							>
								<Box p={iconpad}>
									<Image w={iconw} h={iconh} src={linked} alt='linkedin logo' />
								</Box>
							</Button>
						</Tooltip>
					</Box>
					<Box>
						<Tooltip label='Github' bg={cols.black} color={cols.white}>
							<Button
								opacity={'50%'}
								background={cols.button}
								h={butht}
								w={butwid}
								_active={{
									backgroundColor: cols.on,
								}}
								_hover={{
									backgroundColor: cols.black,
									opacity: '100%',
								}}
								as={Link}
								href='https://github.com/HannahBeattie'
								isExternal
							>
								<Icon
									p={iconpad}
									w={iconw}
									h={iconh}
									viewBox='0 0 24 24'
									color={cols.white}
								>
									<path
										fill='currentColor'
										// svg data from https://iconmonstr.com/github-1-svg/
										d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
									/>
								</Icon>
							</Button>
						</Tooltip>
					</Box>
					<Spacer />
					<Text fontSize={'12px'} color={cols.white} opacity={'50%'}>
						Ⓒ HannahBee all rights reserved
					</Text>
				</HStack>
			</Box>
		</HStack>
	)
}
