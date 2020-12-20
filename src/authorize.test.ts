import test from 'ava'
import { authorize } from './authorize'

test('Returns true if the passed message and secret are string type', async (t) => {
	const res = await authorize({
		message: 'test',
		secret: 'test',
		request: {} as any,
	})
	t.true(res)
})

test('Returns false if either the passed message or secret is not string type', async (t) => {
	const [res1, res2, res3] = await Promise.all([
		authorize({ message: 1 as any, secret: 'test', request: {} as any }),
		authorize({ message: 'test', secret: 1 as any, request: {} as any }),
		authorize({ message: 1 as any, secret: 1 as any, request: {} as any }),
	])
	t.false(res1)
	t.false(res2)
	t.false(res3)
})
