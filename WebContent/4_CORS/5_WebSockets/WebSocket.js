
function testWebSocket() {

    // 要创建 Web Socket，先实例一个 WebSocket 对象并传入要连接的 URL。
    // 必须给 WebSocket 构造函数传入绝对 URL。
    // 同源策略对 Web Sockets 不适用，因此可以通过它打开到任何站点的连接。
    // 至于是否会与某个域中的页面通信，则完全取决于服务器。
    var socket = new WebSocket("ws://localhost/ajax/change.do");

    /**
     * 实例化了 WebSocket 对象后，浏览器就会马上尝试创建连接。
     * 与 XHR 类似， WebSocket 也有一个表示当前状态的 readyState 属性。
     * 不过，这个属性的值与 XHR 并不相同，而是如下所示：
     * WebSocket.OPENING (0)：正在建立连接。
     * WebSocket.OPEN (1)：已经建立连接。
     * WebSocket.CLOSING (2)：正在关闭连接。
     * WebSocket.CLOSE (3)：已经关闭连接。
     */

    // Web Socket 打开之后，就可以通过连接发送和接收数据。要向服务器发送数据，使用 send() 方法并传入任意字符串。
    // 因为 Web Sockets 只能通过连接发送纯文本数据，所以对于复杂的数据结构，在通过连接发送之前，必须进行序列化。
    socket.send("Hello world!");
    socket.send(JSON.stringify({name:"tom",code:"001"}));

    // 服务器要读取其中的数据，就要解析接收到的 JSON 字符串。
    // 当服务器向客户端发来消息时，WebSocket 对象就会触发 message 事件。
    // 这个 message 事件与其他传递消息的协议类似，也是把返回的数据保存在 event.data 属性中。
    socket.onmessage = function(event){
        var data = event.data;
        // 与通过 send()发送到服务器的数据一样，event.data 中返回的数据也是字符串。
        // 如果想得到其他格式的数据，必须手工解析这些数据。
    };

    // 要关闭 Web Socket 连接，可以在任何时候调用 close() 方法。
    // 调用了 close()之后，readyState 的值立即变为 2（正在关闭），而在关闭连接后就会变成 3。
    socket.close();
}
