import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for all users',
  description:
    'Pay once and get lifetime access to quality habit tracking.',
  plans: [
    {
      id: 'starter',
      title: 'Starter',
      description: 'Habit tracking for beginners.',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: '3 habits',
        },
        {
          title: 'Share to social media',
        },
        {
          title: '1 year history tracking',
        },
        {
          title: '1 year of updates',
        },
      ],
      action: {
        href: 'https://arjunrao87.gumroad.com/l/centurion',
      },
    },
    {
      id: 'pro',
      title: 'Pro',
      description: 'Habit tracking for pros.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $99
          </Text>
          <Text>$49</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited habits',
        },
        {
          title: 'Reminders for your habits',
        },
        {
          title: 'Lifetime history tracking',
        },
        {
          title: 'Lifetime updates',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://arjunrao87.gumroad.com/l/centurion',
      },
    },
    {
      id: 'teams',
      title: 'Teams',
      description: 'Habit tracking for teams.',
      price: (
        <HStack>
          <Text>Custom pricing</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Track habits across teams',
        },
        {
          title: 'Enterprise SSO',
        },
        null,
        null,
        null,
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        label: 'Contact us',
        href: 'teams@centurion.com',
      },
    },
  ],
}
