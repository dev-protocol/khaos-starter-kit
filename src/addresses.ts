import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network }) =>
	network === 'mainnet'
		? '0x1510EA12a30E5c40b406660871b335feA32f29A'
		: '0x609Fe85Dbb9487d55B5eF50451e20ba2Edc8F4B7'
