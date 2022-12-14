import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import mrGood from '../../public/assets/portfolio/mrGood.jpeg'
import todo from '../../public/assets/portfolio/todo.jpeg'
import xit from '../../public/assets/portfolio/xit.jpeg'
import momo from '../../public/assets/portfolio/momo.jpeg'
import slug from '../../public/assets/portfolio/dress.png'
import Slide from './Slide'
import { useThemeColors } from '../../components/constants'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Cards() {
	const cols = useThemeColors()
	const blurbsize = 'm'

	const cardProps = [
		{
			img: momo,
			imgAlt: 'a screen-grab of the studio monkey webpage',
			title: 'Studio Monkey',
			linkText: 'studiomomo.io',
			linkUrl: 'https://www.studiomomo.io',
			details: (
				<>
					<Text fontSize={blurbsize}>
						Studio Monkey is a premier VFX management tool used my many high profile
						studios.
						<br />I worked in close dialog with CEO Zach Tucker to create a visual brand
						identity, logo and website aesthetic that fit the ethos and intention of the
						company — functional, minimal, playful and highly customer-focused.
						<br />
						<br />
						The website was a collaboration between myself and Mikey Lemmon who handled
						the backend functionality and software integration, while I focused on the
						landing page and sustaining a constant visual and colour story.
						<br />
					</Text>
				</>
			),
		},
		{
			img: xit,
			imgAlt: 'a screen-grab of the xit app',
			title: 'X-it',
			linkText: 'x-it homepage',
			linkUrl: 'https://x-it.vercel.app',
			details: (
				<>
					<Text fontSize={blurbsize}>
						X-it is a lightweight plug-in that allows users to vote ‘out’ of upcoming
						calendar events, anonymously.
					</Text>
					<br />
					<Text fontSize={blurbsize}>
						This project (and accompanying website) constituted my final (solo)
						submission for
						<Link href='https://devacademy.co.nz/'> Dev Academy Aotearoa.</Link>
					</Text>
					<br />
					<Text fontSize={blurbsize}>
						X-it will continue to evolve, with the collaborative effort of{' '}
						<Link href='https://mikeylemmon.com/'>Mikey Lemmon.</Link>
					</Text>
				</>
			),
		},

		{
			img: mrGood,
			imgAlt: 'A screen grab of my app, "Mr Verygood", that gives users a virtual pep talk',
			title: ' Mr Verygood',
			linkText: 'Meet Mr Verygood',
			linkUrl: 'https://mr-verygood.herokuapp.com',
			details: (
				<>
					<Text fontSize={blurbsize}>
						A somewhat goofy solo project I completed during my study at Dev Academy.
					</Text>
					<br />
					<Text fontSize={blurbsize}>
						‘Mr Verygood’ is a virtual friend, that gives users a random pep-talk on
						click.
					</Text>
				</>
			),
		},
		{
			img: slug,
			imgAlt: 'A screen grab of "dress the slug"',
			linkText: 'Dress the slug',
			linkUrl: '/slug',
			title: 'Dress the slug',
			details: (
				<>
					<Text fontSize={blurbsize}>
						A fun dress-up game I originally created while studying at Dev acadamy.
						<br></br>
						<br></br>
						Featuring original illustrations by myslef of a slug whose lived an exciting
						life.
					</Text>
				</>
			),
		},
		{
			img: todo,
			imgAlt: 'A screen grab of "todo" app',
			title: 'Todo',
			details: (
				<>
					<Text fontSize={blurbsize}>
						A basic, full-stack todo application that stores completed and uncompleted
						tasks in a SeQuaLite database using redux toolkit.
						<br />
						<br />
						Completed as part of a full stack skill assessment for Dev Academy.
					</Text>
				</>
			),
		},
	]

	// return <Text>portfolio goes here</Text>

	const cards = cardProps.map((props, idx) => (
		<Box key={`project-${idx}`} minW={{ base: undefined, md: '36rem' }} display='flex'>
			<Slide {...props} />
		</Box>
	))

	return (
		<>
			<HStack
				backgroundColor={cols.blurbrv}
				display={{ base: 'none', md: 'flex' }}
				maxW='100vw'
				w='100vw'
				overflowX='auto'
				alignItems='stretch'
				flex='1'
				spacing='8'
				p='8'
			>
				{cards}
			</HStack>
			<VStack
				backgroundColor={cols.ReadingContrast3}
				display={{ base: 'flex', md: 'none' }}
				alignItems='stretch'
				flex='1'
				spacing='8'
			>
				{cards}
			</VStack>
		</>
	)
}
