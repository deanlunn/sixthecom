import type { GlobalConfig } from 'payload/types'

import link from '../fields/link' // Import your custom link field

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 10,
      fields: [
        {
          name: 'item',
          type: 'group',
          fields: [
            link({
              // Use your custom link field for top-level items
              appearances: false,
            }),
            {
              name: 'subItems',
              type: 'array',
              fields: [
                link({
                  // Reuse the same link field for nested items
                  appearances: false,
                }),
                // You can add more fields here if needed for sub-items
              ],
            },
          ],
        },
        // Include other fields as necessary
      ],
    },
  ],
}
