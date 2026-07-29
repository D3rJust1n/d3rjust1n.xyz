import { he } from './keyboards/hall-effect';
import { barebone } from './keyboards/barebone';
import { prebuild } from './keyboards/prebuild';

export const keyboards = {
  ...he,
  ...barebone,
  ...prebuild,
}