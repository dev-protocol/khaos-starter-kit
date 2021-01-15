import { FunctionPack } from '@devprotocol/khaos-core'

export const pack: FunctionPack = async ({ results }) => {
	return {
		name: 'khaosCallback',
		args: [results.message, results.status, results.statusMessage],
	}
}
