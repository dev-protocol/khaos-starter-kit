import { FunctionEvent } from '@devprotocol/khaos-core'
import { always } from 'ramda'

export const event: FunctionEvent = always(Promise.resolve('Query'))
