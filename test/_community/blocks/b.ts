import type { Block } from 'payload'

export const B: Block = {
  slug: 'B',
  fields: [
    {
      type: 'text',
      name: 'hello',
      required: true,
      label: 'Text',
    },
  ],
}
