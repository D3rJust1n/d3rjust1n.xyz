import { singleton } from '@keystatic/core';
import { numpadSchema } from '../schemas/numpadSchema';

export const numpad = {
  numpads: singleton({
    label: 'Numpads',
    path: 'src/data/keyboards/numpad/numpad',
    format: { data: 'json' },
    schema: { items: numpadSchema}
  })
}