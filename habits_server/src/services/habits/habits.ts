// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  habitsDataValidator,
  habitsPatchValidator,
  habitsQueryValidator,
  habitsResolver,
  habitsExternalResolver,
  habitsDataResolver,
  habitsPatchResolver,
  habitsQueryResolver
} from './habits.schema'

import type { Application } from '../../declarations'
import { HabitsService, getOptions } from './habits.class'

export * from './habits.class'
export * from './habits.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const habits = (app: Application) => {
  // Register our service on the Feathers application
  app.use('habits', new HabitsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('habits').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(habitsExternalResolver),
        schemaHooks.resolveResult(habitsResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(habitsQueryValidator), schemaHooks.resolveQuery(habitsQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(habitsDataValidator), schemaHooks.resolveData(habitsDataResolver)],
      patch: [schemaHooks.validateData(habitsPatchValidator), schemaHooks.resolveData(habitsPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    habits: HabitsService
  }
}
