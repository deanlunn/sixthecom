import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'

import classes from './index.module.scss'

type Cause = {
  id: string
  title: string
  description: string
  imageUrl: string
  linkUrl: string
}

const causes: Cause[] = [
  {
    id: '1',
    title: 'A Little Help',
    description:
      "This nonprofit's focus is on providing services to elderly citizens so they can remain in their homes. The root is neighborly connection building community and fostering intergenerational connections among members.",
    imageUrl: '/C1.jpeg',
    linkUrl: '/a-little-help',
  },
  {
    id: '2',
    title: 'Mirror Image Arts',
    description:
      'This is a great nonprofit whose passion and purpose is to disrupt the school to prison pipeline through interactive theatre programs that develop social emotional skills and build trusted relationships with youth.',
    imageUrl: '/C2.webp',
    linkUrl: '/mirror-image-arts',
  },
  {
    id: '3',
    title: 'Lupus Colorado',
    description:
      'Colorado’s only nonprofit to serve individuals and families with lupus. Their goal is to improve the quality of life for all people affected by lupus.',
    imageUrl: '/C3.webp',
    linkUrl: '/lupus-colorado',
  },
  {
    id: '4',
    title: 'Youth On Record',
    description:
      'Youth on Record empowers Colorado’s underserved youth to achieve their academic, artistic, and personal best by employing local, professional artists as their educators.',
    imageUrl: '/C4.webp',
    linkUrl: '/youth-on-record',
  },
  {
    id: '5',
    title: 'Kansas Miss Amazing',
    description:
      'Kansas Miss Amazing is an organization that prides itself in being created for and led by women with disabilities. ',
    imageUrl: '/C5.webp',
    linkUrl: '/kansas-miss-amazing',
  },
  {
    id: '6',
    title: 'Denver Womens Sports Collective',
    description:
      "This newly formed nonprofit aims to be the leading association for inspiring women who celebrate community, empowerment and professional advancement within the Rocky Mountain Region's sports, events and marketing industries.",
    imageUrl: '/C6.jpeg',
    linkUrl: '/denver-womens-sports-collective',
  },
  {
    id: '7',
    title: 'Colorado Miss Amazing',
    description:
      'This nonprofit works to provide opportunities for girls and women with disabilities across the country to build self-esteem.',
    imageUrl: '/C7.webp',
    linkUrl: '/colorado-miss-amazing',
  },
  {
    id: '8',
    title: 'PawsCo',
    description:
      'PawsCo aims to make a systematic difference in animal welfare, so they take a comprehensive approach that involves being proactive with outreach, addressing current issues, and being a resource to existing organizations.',
    imageUrl: '/C8.jpeg',
    linkUrl: '/pawsco',
  },
  {
    id: '9',
    title: 'Habitual Roots',
    description:
      'This great organization is a people-centered community providing accessible resources for mental and emotional wellness.',
    imageUrl: '/C9.webp',
    linkUrl: '/habitual-roots',
  },
  {
    id: '10',
    title: 'The Respect Team',
    description:
      'Encourages self-respect and respect of others through educational programs in middle schools and high schools that are designed around the message of "I am valuable. You are valuable."',
    imageUrl: '/C10.jpeg',
    linkUrl: '/the-respect-team',
  },
]

const Causes: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Causes</title>
        <meta
          name="description"
          content="Discover the causes we support and contribute to making a difference."
        />
      </Head>
      <div className={classes.banner}>
        <Image src="/causes-bg.jpeg" alt="The Causes" layout="fill" objectFit="cover" priority />
      </div>
      <Gutter className={classes.container}>
        <div className={classes.stepsContainer}>
          <div className={classes.step}>
            <h2>Step 1</h2>
            <p>[Find A Cause Below]</p>
          </div>
          <div className={classes.step}>
            <h2>Step 2</h2>
            <p>[Click to Shop]</p>
          </div>
          <div className={classes.step}>
            <h2>Step 3</h2>
            <p>[% of Proceeds Donated]</p>
          </div>
        </div>

        <div className={classes.causesContainer}>
          {causes.map(cause => (
            <div key={cause.id} className={classes.cause}>
              <Link href={cause.linkUrl} passHref>
                <div className={classes.causeLink}>
                  <img src={cause.imageUrl} alt={cause.title} />
                  <h3>{cause.title}</h3>
                </div>
              </Link>

              <p>{cause.description}</p>
            </div>
          ))}
        </div>
      </Gutter>
    </>
  )
}

export default Causes
