// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Params } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { Habits, HabitsData, HabitsQuery, HabitsService } from './services/habits/habits'
export type { Habits, HabitsData, HabitsQuery }

import type { Groups, GroupsData, GroupsQuery, GroupsService } from './services/groups/groups'
export type { Groups, GroupsData, GroupsQuery }

import type { User, UserData, UserQuery, UserService } from './services/users/users'
export type { User, UserData, UserQuery }

import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>

const groupsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type GroupsClientService = Pick<GroupsService<Params<GroupsQuery>>, typeof groupsServiceMethods[number]>

const habitsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type HabitsClientService = Pick<HabitsService<Params<HabitsQuery>>, typeof habitsServiceMethods[number]>

export interface ServiceTypes {
  habits: HabitsClientService
  groups: GroupsClientService
  users: UserClientService
  //
}

/**
 * Returns a typed client for the habits_server app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client = feathers<ServiceTypes, Configuration>()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))

  client.use('users', connection.service('users'), {
    methods: userServiceMethods
  })
  client.use('groups', connection.service('groups'), {
    methods: groupsServiceMethods
  })
  client.use('habits', connection.service('habits'), {
    methods: habitsServiceMethods
  })
  return client
}
