import { barebone } from './barebone';
import { he } from './hall-effect';
import { prebuild } from './prebuild';
import { numpad } from './numpad';

type Category = 'prebuild' | 'he' | 'barebone' | 'numpad';
type Size = '60%' | '65%' | '75%' | 'TKL' | 'Fullsize';

const withMeta = <T>(items: T[], category: Category, size?: Size) =>
  items.map((kb) => ({ ...kb, category, ...(size && { size }) }));

// const withCategory = <T>(items: T[], category: 'prebuild' | 'he' | 'barebone') =>
//   items.map(kb => ({ ...kb, category }));

export const keyboards = [
  ...withMeta(prebuild.sixty, 'prebuild', '60%'),
  ...withMeta(prebuild.sixtyfive, 'prebuild', '65%'),
  ...withMeta(prebuild.seventyfive, 'prebuild', '75%'),
  ...withMeta(prebuild.tkl, 'prebuild', 'TKL'),
  ...withMeta(prebuild.fullsize, 'prebuild', 'Fullsize'),

  ...withMeta(barebone.sixty, 'barebone', '60%'),
  ...withMeta(barebone.sixtyfive, 'barebone', '65%'),
  ...withMeta(barebone.seventyfive, 'barebone', '75%'),
  ...withMeta(barebone.tkl, 'barebone', 'TKL'),
  ...withMeta(barebone.fullsize, 'barebone', 'Fullsize'),

  ...withMeta(he.sixty, 'he', '60%'),
  ...withMeta(he.sixtyfive, 'he', '65%'),
  ...withMeta(he.seventyfive, 'he', '75%'),
  ...withMeta(he.tkl, 'he', 'TKL'),
  ...withMeta(he.fullsize, 'he', 'Fullsize'),
  ...withMeta(numpad.numpads, 'numpad'),
];
