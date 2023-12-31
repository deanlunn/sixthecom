import React from 'react'

import { CMSLink } from '../Link'

import classes from './index.module.scss'

const RecursiveNavLink = ({ item }) => {
  // Access link and subItems inside the item group
  const { link, subItems } = item

  return (
    <div className={classes.navItem}>
      <CMSLink {...link} appearance="none" />
      {subItems && subItems.length > 0 && (
        <div className={classes.subMenu}>
          {subItems.map((subItem, index) => (
            // Pass the entire subItem to RecursiveNavLink
            <RecursiveNavLink key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  )
}

export default RecursiveNavLink
