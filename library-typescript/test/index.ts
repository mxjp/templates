'use strict'

import test from 'ava';
import { foo } from '../src';

test('foo', async t => {
	t.is(await foo(), 'bar');
});
