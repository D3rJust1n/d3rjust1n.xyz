import { singleton } from '@keystatic/core';
import { keyboardSchema } from '../../schemas/keyboardSchema';

export const barebone = {
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