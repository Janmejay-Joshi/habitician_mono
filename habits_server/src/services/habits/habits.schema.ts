// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const habitsSchema = Type.Object(
  {
    _id: Type.String(),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    avatar: Type.Optional(Type.String()),

    color: Type.String(),
    unit: Type.Optional(Type.String()),
    type: Type.Boolean(),

    special: Type.Optional(Type.String()),
    reminder: Type.Optional(Type.Boolean()),

    target: Type.Number(),
    frequency: Type.Number(),

    owner: Type.String(),
    groupKey: Type.Optional(Type.String()),

    data: Type.Optional(
      Type.Array(
        Type.Object({
          timestamp: Type.Number(),
          value: Type.Number()
        })
      )
    )
  },
  { $id: 'Habits', additionalProperties: false }
)
export type Habits = Static<typeof habitsSchema>
export const habitsResolver = resolve<Habits, HookContext>({})

export const habitsExternalResolver = resolve<Habits, HookContext>({})

// Schema for creating new entries
export const habitsDataSchema = Type.Pick(habitsSchema, [], {
  $id: 'HabitsData'
})
export type HabitsData = Static<typeof habitsDataSchema>
export const habitsDataValidator = getDataValidator(habitsDataSchema, dataValidator)
export const habitsDataResolver = resolve<Habits, HookContext>({
  owner: async (_value, _habit, context) => {
    return context.params.user._id
  }
})

// Schema for updating existing entries
export const habitsPatchSchema = Type.Partial(habitsSchema, {
  $id: 'HabitsPatch'
})
export type HabitsPatch = Static<typeof habitsPatchSchema>
export const habitsPatchValidator = getDataValidator(habitsPatchSchema, dataValidator)
export const habitsPatchResolver = resolve<Habits, HookContext>({})

// Schema for allowed query properties
export const habitsQueryProperties = Type.Pick(habitsSchema, ['_id'])
export const habitsQuerySchema = Type.Intersect(
  [
    querySyntax(habitsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type HabitsQuery = Static<typeof habitsQuerySchema>
export const habitsQueryValidator = getValidator(habitsQuerySchema, queryValidator)
export const habitsQueryResolver = resolve<HabitsQuery, HookContext>({})
