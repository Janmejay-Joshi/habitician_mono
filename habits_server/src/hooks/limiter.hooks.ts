// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { isProvider, setField, iff } from 'feathers-hooks-common'

export const limitToMembers = async (context: HookContext) => {
  iff(
    isProvider('external'),
    setField({
      from: 'params.user._id',
      as: 'params.query.members.$in'
    })
  )
}

export const limitToOwner = iff(
  isProvider('external'),
  setField({
    from: 'params.user._id',
    as: 'params.query.owner'
  })
)

export const limitToUser = iff(
  isProvider('external'),
  setField({
    from: 'params.user._id',
    as: 'params.query._id'
  })
)
