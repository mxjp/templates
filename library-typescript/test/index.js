'use strict'

import test from 'ava'
import { foo } from '..'

test('foo', async t => {
	t.is(await foo(), 'bar')
})
