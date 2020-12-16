import { FunctionOraclizer } from '@devprotocol/khaos-core/types'

export const oraclize: FunctionOraclizer = async (opts, eventData, net) => {
	return {
		message: opts.message,
		status: 0,
		statusMessage: `${net} ${eventData.publicSignature}`,
	}
}
