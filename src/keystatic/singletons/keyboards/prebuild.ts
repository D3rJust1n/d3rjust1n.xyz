import { singleton } from '@keystatic/core';
import { keyboardSchema } from '../../schemas/keyboardSchema';

export const prebuild = {
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
}