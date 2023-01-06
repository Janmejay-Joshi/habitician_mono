import { feathers } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import authentication from '@feathersjs/authentication-client';

const socket = io('http://localhost:3030');
const app = feathers();

app.configure(socketio(socket));
app.configure(authentication());

export { app };
