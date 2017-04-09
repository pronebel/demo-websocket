export default class extends think.controller.base {
  /**
   * WebSocket 建立连接时处理
   * @param  {} self []
   * @return {}      []
   */
  openAction(self){
    var socket = self.http.socket;
    console.log("in openAction");

      this.emit('bbb2', {
          username: 11,
          message: 22
      });
    this.broadcast('ccc','dddd');
  }
  testAction(self){
        var socket = self.http.socket;
        console.log("in testAction");

        this.emit('bbb', {
            username: 11,
            message: 22
        });
    }
  test2Action(self){
      this.json({name: 'thinkjs'});
    console.log("in testAction");
  }
}