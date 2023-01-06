import { HookContext } from '@feathersjs/feathers'

export const updateHabitToUser = async (context: HookContext) => {
  context.app.service('users').patch(context.result.owner, {
    $push: { habits: [context.result._id] }
  })

  return context
}

export const updateGroupToMembers = async (context: HookContext) => {
  context.result.members.forEach((member: string) => {
    context.app.service('users').patch(member, {
      groups: [context.result._id]
    })
  })

  return context
}
