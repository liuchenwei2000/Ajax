
/**
 * 使用 <img> 标签实现跨域
 *
 * 一个网页可以从任何网页中加载图像，不用担心跨域不跨域。这也是在线广告跟踪浏览量的主要方式。
 * 也可以动态地创建图像，使用它们的 onload 和 onerror 事件处理程序来确定是否接收到了响应。
 *
 * 图像 Ping 是与服务器进行简单、单向的跨域通信的一种方式。
 * 请求的数据是通过查询字符串形式发送的，而响应可以是任意内容，但通常是像素图或 204 响应。
 * 通过图像 Ping，浏览器得不到任何具体的数据，但通过侦听 load 和 error 事件，能知道响应是什么时候接收到的。
 *
 * 图像 Ping 有两个主要的缺点，一是只能发送 GET 请求，二是无法访问服务器的响应文本。
 */
function testImagePing() {

    var img = new Image();

    img.onload = function () {
        alert("loaded!");
    };
    img.onerror = function () {
        alert("error!");
    };

    img.src = "http://www.example.com/test?name=Nicholas";
}
