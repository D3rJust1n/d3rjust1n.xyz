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
})