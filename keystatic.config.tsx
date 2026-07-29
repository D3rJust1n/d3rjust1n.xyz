import { config } from '@keystatic/core';
import { keyboards } from './src/keystatic/singletons/keyboards';
import { mouse } from './src/keystatic/singletons/mouse';
import { numpad } from './src/keystatic/singletons/numpad';

export default config({
  storage: {
    kind: 'github',
    repo: 'D3rJust1n/d3rjust1n.xyz',
    branchPrefix: 'updates/'
  },
  singletons: {
    ...keyboards,
    ...mouse,
    ...numpad,
  },
  ui: {
    brand: {
      name: 'D3rJust1n',
      mark: () => <img src="/favicon.svg" height={24} alt="" />,
    },
    navigation: {
      'Prebuild': [
        'keyboards_prebuild_60',
        'keyboards_prebuild_65',
        'keyboards_prebuild_75',
        'keyboards_prebuild_tkl',
        'keyboards_prebuild_fullsize',
      ],
      'Hall Effect': [
        'keyboards_he_60',
        'keyboards_he_65',
        'keyboards_he_75',
        'keyboards_he_tkl',
        'keyboards_he_fullsize',
      ],
      'Barebone': [
        'keyboards_barebone_60',
        'keyboards_barebone_65',
        'keyboards_barebone_75',
        'keyboards_barebone_tkl',
        'keyboards_barebone_fullsize',
      ],
      'Maus': [
        'mice',
      ],
      'Weiteres': [
        'numpads',
      ]
    },
  },
})