import { Block } from 'payload';

export const B: Block = {
  slug: 'b',
  fields: [
    {
      type: 'text',
      name: 'hello',
      required: true,
      label: 'Text',
    },
  ],
};
