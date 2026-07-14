import { singleton } from '@keystatic/core';
import { keyboardSchema } from '../schemas/keyboardSchema';

export const keyboards = {
  // Tastaturen – Prebuild
  keyboards_prebuild_60: singleton({
    label: 'Prebuild – 60%',
    path: 'src/data/keyboards/prebuild/sixtypercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_prebuild_65: singleton({
    label: 'Prebuild – 65%',
    path: 'src/data/keyboards/prebuild/sixtyfivepercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_prebuild_75: singleton({
    label: 'Prebuild – 75%',
    path: 'src/data/keyboards/prebuild/seventyfivepercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_prebuild_tkl: singleton({
    label: 'Prebuild – TKL',
    path: 'src/data/keyboards/prebuild/tkl',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_prebuild_fullsize: singleton({
    label: 'Prebuild – Fullsize',
    path: 'src/data/keyboards/prebuild/fullsize',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),

  // Tastaturen – Hall Effect
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

  // Tastaturen – Barebone
  keyboards_barebone_60: singleton({
    label: 'Barebone – 60%',
    path: 'src/data/keyboards/barebone/sixtypercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_barebone_65: singleton({
    label: 'Barebone – 65%',
    path: 'src/data/keyboards/barebone/sixtyfivepercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_barebone_75: singleton({
    label: 'Barebone – 75%',
    path: 'src/data/keyboards/barebone/seventyfivepercent',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_barebone_tkl: singleton({
    label: 'Barebone – TKL',
    path: 'src/data/keyboards/barebone/tkl',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
  keyboards_barebone_fullsize: singleton({
    label: 'Barebone – Fullsize',
    path: 'src/data/keyboards/barebone/fullsize',
    format: { data: 'json' },
    schema: { items: keyboardSchema },
  }),
}