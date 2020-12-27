import { FunctionAuthorizer } from '@devprotocol/khaos-core'

export const authorize: FunctionAuthorizer = async ({ message, secret }) => {
	return [message, secret].every((x) => typeof x === 'string')
}
