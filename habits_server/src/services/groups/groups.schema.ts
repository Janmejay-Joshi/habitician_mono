// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const groupsSchema = Type.Object(
  {
    _id: Type.String(),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    avatar: Type.Optional(Type.String()),
    color: Type.String(),

    owner: Type.String(),
    members: Type.Array(Type.String()),

    habits: Type.Optional(Type.Array(Type.String()))
  },
  { $id: 'Groups', additionalProperties: false }
)
export type Groups = Static<typeof groupsSchema>
export const groupsResolver = resolve<Groups, HookContext>({})

export const groupsExternalResolver = resolve<Groups, HookContext>({})

// Schema for creating new entries
export const groupsDataSchema = Type.Pick(groupsSchema, [], {
  $id: 'GroupsData'
})
export type GroupsData = Static<typeof groupsDataSchema>
export const groupsDataValidator = getDataValidator(groupsDataSchema, dataValidator)
export const groupsDataResolver = resolve<Groups, HookContext>({})

// Schema for updating existing entries
export const groupsPatchSchema = Type.Partial(groupsSchema, {
  $id: 'GroupsPatch'
})
export type GroupsPatch = Static<typeof groupsPatchSchema>
export const groupsPatchValidator = getDataValidator(groupsPatchSchema, dataValidator)
export const groupsPatchResolver = resolve<Groups, HookContext>({})

// Schema for allowed query properties
export const groupsQueryProperties = Type.Pick(groupsSchema, ['_id'])
export const groupsQuerySchema = Type.Intersect(
  [
    querySyntax(groupsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type GroupsQuery = Static<typeof groupsQuerySchema>
export const groupsQueryValidator = getValidator(groupsQuerySchema, queryValidator)
export const groupsQueryResolver = resolve<GroupsQuery, HookContext>({})
