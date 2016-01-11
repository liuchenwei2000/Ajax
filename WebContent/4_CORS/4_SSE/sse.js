
function testSSE() {

    // 要预订新的事件流，首先要创建一个新的 EventSource 对象，并传进一个入口点。
    // 传入的 URL 必须与创建对象的页面同源（相同的 URL 模式、域及端口）。
    var source = new EventSource("/ajax/change.do");

    /**
     * EventSource 的实例有一个 readyState 属性：
     * 值为 0 表示正连接到服务器，值为 1 表示打开了连接，值为 2 表示关闭了连接。
     *
     * 另外，还有以下三个事件：
     * open：在建立连接时触发。
     * message：在从服务器接收到新事件时触发。
     * error：在无法建立连接时触发。
     */
    source.onmessage = function(event){
        // 服务器发回的数据以字符串形式保存在 event.data 中
        var data = event.data;//处理数据
        /**
         * 所谓的服务器事件会通过一个持久的 HTTP 响应发送，这个响应的 MIME 类型为 text/event-stream。
         * 响应的格式是纯文本，最简单的情况是每个数据项都带有前缀 data:，例如：data:foo。
         * 则上面事件流中的 message 事件返回的 event.data 值为 "foo"。
         *
         * 对于多个连续的以 data: 开头的数据行，将作为多段数据解析，每个值之间以一个换行符分隔。
         * 只有在包含 data:的数据行后面有空行时，才会触发 message 事件，因此在服务器上生成事件流时不能忘了多添加这一行。
         */
    };

    // 默认情况下， EventSource 对象会保持与服务器的活动连接。如果连接断开，还会重新连接。
    // 这就意味着 SSE 适合长轮询和 HTTP 流。如果想强制立即断开连接并且不再重新连接，可以调用 close() 方法。

    source.close();
}
