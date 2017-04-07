export default class extends think.controller.base {
  /**
   * WebSocket 建立连接时处理
   * @param  {} self []
   * @return {}      []
   */
  openAction(self){
    var socket = self.http.socket;
    console.log("in openAction");
    this.broadcast('new message', {
      username: socket.username,
      message: self.http.data
    });
  }
  testAction(self){
    var socket = self.http.socket;
    console.log("in testAction");
  }
}