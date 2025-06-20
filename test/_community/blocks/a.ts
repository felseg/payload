import { Block } from 'payload';
import { A } from './a.js';

export const B: Block = {
  slug: 'b',
  fields: [
    {
      type: 'blocks',
      name: 'blocks',
      blocks: [A],
      required: true,
    },
  ],
};
