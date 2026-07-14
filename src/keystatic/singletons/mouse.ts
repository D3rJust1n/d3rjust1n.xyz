import { singleton } from '@keystatic/core';
import { mouseSchema } from '../schemas/mouseSchema'

export const mouse = {
  mice: singleton({
    label: 'Mäuse',
    path: 'src/data/mouse/mice',
    format: { data: 'json'},
    schema: { items: mouseSchema},
  }),
}