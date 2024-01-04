'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import classes from './index.module.scss'

type BannerItem = {
  imageUrl: string
  linkUrl: string
  altText: string
}

const bannerItems: BannerItem[] = [
  { imageUrl: '/hero1.webp', linkUrl: '/the-causes', altText: 'The Causes' },
  { imageUrl: '/hero2.webp', linkUrl: '/the-6th-apparel', altText: 'The 6th' },
]

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? bannerItems.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === bannerItems.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const timer = setInterval(goToNext, 8000)
    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <div className={classes.slider}>
      <button onClick={goToPrevious} className={classes.navButton}>
        &lt;
      </button>
      {bannerItems.map((item, index) => (
        <div
          key={index}
          className={`${classes.slide} ${index === currentIndex ? classes.active : ''}`}
        >
          <Link href={item.linkUrl} passHref>
            <img src={item.imageUrl} alt={item.altText} />
          </Link>
        </div>
      ))}
      <button onClick={goToNext} className={classes.navButton}>
        &gt;
      </button>
    </div>
  )
}

export default ImageSlider
