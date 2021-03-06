const io = require('socket.io')

module.exports = class Sockets {
  constructor(props = {}) {
    this.app = props.app || {}
    this.http = props.http || {}
    this.io = io(this.http)

    this.inintConnection()
  }

  inintConnection() {
    this.io.on('connection', (socket) => {
      console.log('a user connected')
    
      this.io.clients((error, clients) => {
        console.log('Clients server', clients)
      })
    
      socket.on('disconnect', () => {
        console.log('user disconnected')
      });
    });
  }

  getIO() {
    return this.io
  }

  emit(event = '', data = {}) {
    return this.io.emit(event, data)
  }

  on(event = '', callback = () => {}) {
    return this.io.on(event, callback)
  }

}