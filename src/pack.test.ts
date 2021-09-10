/* eslint-disable @typescript-eslint/no-non-null-assertion*/
import test from 'ava'
import { pack } from './pack'

test('Returns callback function name', async (t) => {
	const res = await pack({ results: {} as any })
	t.is(res!.name, 'khaosCallback')
})

test('Returns arguments', async (t) => {
	const res = await pack({
		results: { message: 'test', status: 1, statusMessage: 'status' },
	})
	t.deepEqual(res!.args, ['test', 1, 'status'])
})
