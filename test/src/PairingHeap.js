// eslint-disable-next-line ava/use-test
import ava from 'ava';

import * as spec from '@heap-data-structure/specification';

import {PairingHeap} from '#module';

const heaps = [['PairingHeap', (compare) => new PairingHeap(compare)]];

spec.test(ava, heaps, {references: true, length: false});
