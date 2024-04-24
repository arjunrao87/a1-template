import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text
            bgGradient={[
              'linear(to-tr, teal.300, yellow.400)',
              'linear(to-t, blue.200, teal.500)',
              'linear(to-b, orange.100, purple.300)',
            ]}
            bgClip='text'
            fontSize='6xl'
            textStyle="h1"
            fontWeight='extrabold'
          >
            {title}
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
      </Container>
    </Flex>
  )
}
