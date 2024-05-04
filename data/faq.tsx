import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  items: [
    {
      q: 'How many habits can I track with Centurion?',
      a: (
        <>
          In the Free tier, you are restricted to 3 habits. <br /> The Pro tier does not have any restrictions.
        </>
      ),
    },
    {
      q: 'Can I use Centurion Pro for client work?',
      a: "Yes, that's totally up to you, as long as it fits the license you purchase.",
    },
    {
      q: 'Do you have built-in integrations with other apps?',
      a: 'No, currently we do not. This is a highly requested feature so it is on our roadmap. If there are any integrations you are particularly interested in, please email support@centurion.com',
    },
    {
      q: 'Can I be reminded about my habits?',
      a: 'Not at the moment. However, it is a highly requested feature and is on our roadmap!',
    },
  ],
}

export default faq
