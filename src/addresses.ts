import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network }) =>
	network === 'mainnet'
		? '0x1510EA12a30E5c40b406660871b335feA32f29A'
		: undefined
