import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

export const Logo = (props) => {
	return (
		<Image
		  src="/static/images/logo.png"
		  width={150}
		  height={150}
		  alt="Picture of the author"
		/>
	)
}
