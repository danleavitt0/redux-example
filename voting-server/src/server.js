import Server from 'socket.io'

export function startServer (store) {
  const io = new Server().attach(8090)

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    socket.emit('reset')
    socket.on('action', (action) => {
      if (action.type === 'RESET') { io.emit('reset', store.getState().toJS()) }
      store.dispatch.bind(store, action)()
    })
  })
}
