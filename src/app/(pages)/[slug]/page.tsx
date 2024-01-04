import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import type { Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import ImageSlider from '../../_components/ImageSlider'
import { generateMeta } from '../../_utilities/generateMeta'

import classes from './index.module.scss'
import { HR } from '../../_components/HR'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  if (!page && slug === 'home') {
    page = staticHome
  }

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  const featuredCollections = [
    {
      id: '1',
      title: 'The 6th',
      description: 'The 6th Apparel',
      imageUrl: '/champion.webp',
      linkUrl: '/collection1',
    },
    {
      id: '2',
      title: 'A Little Help',
      description: 'A Little Help',
      imageUrl: '/C1.jpeg',
      linkUrl: '/a-little-help',
    },
    {
      id: '3',
      title: 'Mirror Image Arts',
      description: 'Mirror Image Arts',
      imageUrl: '/C2.webp',
      linkUrl: '/mirror-image-arts',
    },
  ]

  const featuredProducts = [
    {
      id: '1',
      title: 'The 6th Signature Tee Black',
      description: '$20.00',
      imageUrl: '/P1.webp',
      linkUrl: 'the-6th-signature-black-tee',
    },
    {
      id: '2',
      title: 'The 6th Signature Tee Gray',
      description: '$20.00',
      imageUrl: '/P2.webp',
      linkUrl: '/product1',
    },
    {
      id: '3',
      title: 'Champion Signature Jacket',
      description: '$52.00',
      imageUrl: '/P3.webp',
      linkUrl: '/product1',
    },
    {
      id: '4',
      title: 'The 6th Signature Long Sleeve',
      description: '$40.00',
      imageUrl: '/P4.webp',
      linkUrl: '/product1',
    },
  ]

  return (
    <React.Fragment>
      {slug === 'home' ? (
        <>
          <Head>
            <title>The 6th Clothing Co.</title>
            <meta
              name="description"
              content="Shop online today for affordable, high-quality apparel and accessories."
            />
          </Head>
          <div className={classes.homeContainer}>
            <ImageSlider />
            <Gutter>
              <h2 className={classes.header}>Featured Collections</h2>
              <div className={classes.container}>
                <div className={classes.collectionsContainer}>
                  {featuredCollections.map(collection => (
                    <div key={collection.id} className={classes.collectionCard}>
                      <Link href={collection.linkUrl} passHref>
                        <div className={classes.collectionLink}>
                          <img src={collection.imageUrl} alt={collection.title} />
                          <h5>{collection.title}</h5>
                        </div>
                      </Link>
                      <p>{collection.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <HR />
              <h2 className={classes.header}>Featured Products</h2>
              <div className={classes.container}>
                <div className={classes.productsContainer}>
                  {featuredProducts.map(product => (
                    <div key={product.id} className={classes.productCard}>
                      <Link href={product.linkUrl} passHref>
                        <div className={classes.collectionLink}>
                          <img src={product.imageUrl} alt={product.title} />
                          <h3>{product.title}</h3>
                        </div>
                      </Link>
                      <p>{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <HR />
            </Gutter>
            <div className={classes.giveMoreSection}>
              <h2>Give More</h2>
              <p>Your Purchase Your Power. Our Donation.</p>
              {/* Additional content and links */}
            </div>
          </div>
        </>
      ) : (
        <>
          <Hero {...hero} />
          <Blocks
            blocks={layout}
            disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
          />
        </>
      )}
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render a static home page for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page && slug === 'home') {
    page = staticHome
  }

  return generateMeta({ doc: page })
}
