import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'
import Script from 'next/script'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex py="4" alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='8xl'
            textStyle="h1"
            fontWeight='extrabold'
          >
            {title} <br/>
              <span className="typer" id="main" data-words="writing,reading,working out,coding" data-delay="100" data-deletedelay="5000"></span>
              <span className="cursor" data-owner="main"></span>
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
          >
            {description}
          </Text>
        </VStack>
        {children}
        <Script src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"></Script>
      </Container>
    </Flex>
  )
}
