// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Habits, HabitsData, HabitsPatch, HabitsQuery } from './habits.schema'

export interface HabitsParams extends MongoDBAdapterParams<HabitsQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class HabitsService<ServiceParams extends Params = HabitsParams> extends MongoDBService<
  Habits,
  HabitsData,
  ServiceParams,
  HabitsPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('habits'))
  }
}
