import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Gutter } from '../../_components/Gutter'

import classes from './index.module.scss'

const About: React.FC = () => {
  return (
    <>
      <Gutter className={classes.container}>
        <Head>
          <title>About Us</title>
          <meta name="description" content="Learn more about our company and our mission." />
        </Head>
        <div className={classes.aboutContainer}>
          <h2>About Us</h2>
          <section className={classes.storySection}>
            <h4>Our Story</h4>
            <p>
              The 6th Clothing Co. is a clothing brand established on July 10, 2018 by Founder/CEO.
              Badi Marcel Tolo. Badi, now a US Citizen, was originally born in Zaire (since renamed
              the Democratic Republic of Congo) and immigrated with his family to the U.S. at the
              age of 2 as his parents sought to further their education and give their growing
              family a chance at the American Dream. His efforts and dedication in all he does is to
              honor the sacrifices his parents made in moving across the world to give themselves,
              Badi and his siblings the opportunity to live out that dream. Badi Marcel Tolo Founder
              of The 6th Clothing Co Growing up, basketball was Badi's favorite sport to play. He
              was a Denver Nuggets fan and played point guard taking pride in the challenge of
              leading a team and creating opportunities in the game for his teammates to succeed. At
              the age of 16, he faced a different kind of challenge that lead to the end of his high
              school basketball career as he was cut from his high school basketball team and then
              shortly thereafter was diagnosed with and would have to overcome lymphatic cancer.
              Devastated and not sure how to process this, with the support of a loving family and
              close friends, he did his best to stay positive and from that moment on, he set his
              sights on facing the lymphoma and every challenge he would face with a chip on his
              shoulder for what it took from him. If he could beat cancer, he could beat anything.
              He embraced a "6th man" mentality: patience and sacrifice in the face of adversity,
              but always a belief in himself and what could be accomplished when it's your time to
              shine. While he did come to regret never going back out for the basketball team after
              his diagnosis and successful treatment, his love of sports and competing never faded
              as he would go on to try various sporting activities every opportunity he had after
              high school to stay healthy and to prove to himself that he could excel at anything he
              put his mind to. Badi graduated with a Graphic Design Degree from the University of
              Wyoming and somehow still found his way to "the pros" through self-determination after
              grinding his way through a 2 year period in life where he could not find a job during
              the economic recession of 2008. He never gave up though and was able to scrape by
              while building a portfolio of work by doing whatever bit of contract or freelance
              graphic design work he could find. This included for the Athletics Departments at his
              alma mater, UW, as well as for the University of Alabama-Birmingham (UAB). He
              presently serves as the Art Director for Kroenke Sports & Entertainment, a Fortune 500
              Company in the professional sports & entertainment industry proudly having been a part
              of the design team that rebranded his childhood basketball team, the Denver Nuggets
              prior to the 2018 NBA season. After reaching the pinnacle of design in the
              professional sports industry, Badi's personal drive to do something bigger than
              himself, coupled with his background and life experiences contributed to the story
              behind his determination to create, collaborate and give back through his passion
              project and brand that is “The 6th”.{' '}
            </p>
          </section>
          <section className={classes.missionSection}>
            <h2>Our Mission</h2>
            <p>
              To develop a brand and community whose belief in themselves and in each other can make
              a positive impact in their own lives and communities when they work as One Team, One
              Tribe. When you purchase any product from this brand, a percentage of the proceeds
              will be donated to various nonprofits we highlight and partner with. Be "The 6th" and
              use that chip on your shoulder to Do More, Be More and Give More Together.
            </p>
          </section>
          <section className={classes.imageCard}>
            <div className={classes.box} />
            <Image src="/A1.webp" alt="The 6th Clothing Co. Logo" width={500} height={500} />
            <div className={classes.box} />
            <Image src="/A2.webp" alt="The 6th Clothing Co. Logo" width={500} height={500} />
            <div className={classes.box} />
            <Image src="/A3.webp" alt="The 6th Clothing Co. Logo" width={500} height={500} />
            <div className={classes.box} />
            <Image src="/A4.webp" alt="The 6th Clothing Co. Logo" width={500} height={500} />
            <div className={classes.box} />
            <Image src="/A5.jpeg" alt="The 6th Clothing Co. Logo" width={500} height={500} />
            <div className={classes.box} />
            <Image src="/A6.webp" alt="The 6th Clothing Co. Logo" width={500} height={500} />
            <div className={classes.box} />
          </section>
        </div>
      </Gutter>
    </>
  )
}

export default About
