import { singleton } from '@keystatic/core';
import { keyboardSchema } from '../../schemas/keyboardSchema';

export const he = {
  keyboards_he_60: singleton({
    label: 'Hall Effect – 60%',
    path: 'src/data/keyboards/he/sixtypercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_he_65: singleton({
    label: 'Hall Effect – 65%',
    path: 'src/data/keyboards/he/sixtyfivepercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_he_75: singleton({
    label: 'Hall Effect – 75%',
    path: 'src/data/keyboards/he/seventyfivepercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_he_tkl: singleton({
    label: 'Hall Effect – TKL',
    path: 'src/data/keyboards/he/tkl',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_he_fullsize: singleton({
    label: 'Hall Effect – Fullsize',
    path: 'src/data/keyboards/he/fullsize',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
}