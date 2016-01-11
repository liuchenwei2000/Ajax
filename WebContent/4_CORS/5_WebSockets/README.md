## Web Sockets ##

Web Sockets 的目标是在一个单独的持久连接上提供全双工、双向通信。在 JavaScript 中创建了 Web Socket 之后，会有一个 HTTP 请求发送到服务器以发起连接。在取得服务器响应后，建立的连接会使用 HTTP 升级，从 HTTP 协议交换为 Web Socket 协议。也就是说，使用标准的 HTTP 服务器无法实现 Web Sockets，只有支持这种协议的专门服务器才能正常工作。

由于 Web Sockets 使用了自定义的协议，所以 URL 模式也略有不同。未加密的连接不再是 `http://`，而是 `ws://`，加密的连接也不是 `https://`，而是 `wss://`。在使用 Web Socket URL 时，必须带着这个模式，因为将来还有可能支持其他模式。

使用自定义协议而非 HTTP 协议的好处是，能够在客户端和服务器之间发送非常少量的数据，而不必担心 HTTP 那样字节级的开销。由于传递的数据包很小，因此 Web Sockets 非常适合移动应用。毕竟对移动应用而言，带宽和网络延迟都是关键问题。使用自定义协议的缺点在于，制定协议的时间比制定 JavaScript API 的时间还要长。 Web Sockets 曾几度搁浅，就因为不断有人发现这个新协议存在一致性和安全性的问题。

目前支持 Web Sockets 的浏览器有 Firefox 6+、 Safari 5+、 Chrome 和 iOS 4+版 Safari。

### 与 SSE 的取舍 ###

在考虑是使用 SSE 还是使用 Web Sockets 时，可以考虑如下几个因素：

* 首先，是否有自由度建立和维护 Web Sockets 服务器？

	因为 Web Socket 协议不同于 HTTP，所以现有服务器不能用于 Web Socket 通信。
	SSE 倒是通过常规 HTTP 通信，因此现有服务器就可以满足需求。

* 其次，到底需不需要双向通信。

	如果用例只需读取服务器数据（如比赛成绩），那么 SSE 比较容易实现。
	如果用例必须双向通信（如聊天室），那么 Web Sockets 显然更好。
	另外在不能选择 Web Sockets 的情况下，组合 XHR 和 SSE 也是能实现双向通信的。