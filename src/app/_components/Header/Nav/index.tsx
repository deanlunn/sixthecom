'use client'

'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import RecursiveNavLink from '../../RecursiveNavLink'

import classes from '../index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      <div className={classes.left}>
        {navItems.map((item, i) => (
          <RecursiveNavLink key={i} {...item} />
        ))}
      </div>
      <div className={classes.right}>
        <CartLink />
        {user && <Link href="/account">ACCOUNT</Link>}
        {!user && (
          <React.Fragment>
            <Link href="/login">LOGIN</Link>
            <Link href="/create-account">CREATE ACCOUNT</Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  )
}
