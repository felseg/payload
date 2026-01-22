import type { Block } from 'payload'

import { B } from './b.js'

export const A: Block = {
  slug: 'a',
  fields: [
    {
      type: 'blocks',
      name: 'blocks',
      blocks: [B],
      required: true,
    },
  ],
}
