import { FunctionOraclizer } from '@devprotocol/khaos-core'

export const oraclize: FunctionOraclizer = async ({
	signatureOptions,
	query,
	network,
}) => {
	return {
		message: signatureOptions.message,
		status: 0,
		statusMessage: `${network} ${query.publicSignature}`,
	}
}
