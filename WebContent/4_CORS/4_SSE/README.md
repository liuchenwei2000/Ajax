## 服务器发送事件 ##

SSE（Server-Sent Events，服务器发送事件）是围绕只读 Comet 交互推出的 API 或者模式。 SSE API 用于创建到服务器的单向连接，服务器通过这个连接可以发送任意数量的数据。

服务器响应的 MIME 类型必须是 text/event-stream，而且是浏览器中的 JavaScript API 能解析格式输出。SSE 支持短轮询、长轮询和 HTTP 流，而且能在断开连接时自动确定何时重新连接。有了这么简单实用的 API，再实现 Comet 就容易多了。

支持 SSE 的浏览器有 Firefox 6+、 Safari 5+、 Opera 11+、 Chrome 和 iOS 4+版 Safari。