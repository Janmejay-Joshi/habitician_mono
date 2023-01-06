import { feathers } from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import authentication from '@feathersjs/authentication-client'

import { Storage } from '@ionic/storage'

const socket = io('http://192.168.154.62:3030')
const app = feathers()

class CustomStorage extends Storage {
  getItem = this.get
  setItem = this.set
  removeItem = this.remove
}

const customStore = new CustomStorage()
customStore.create()

app.configure(socketio(socket))
app.configure(
  authentication({
    storage: customStore
  })
)

export { app }
