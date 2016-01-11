
/**
 * JSONP 是 JSON with padding（填充式 JSON 或参数式 JSON）的简写，是应用 JSON 的一种新方法。
 * JSONP 看起来与 JSON 差不多，只不过是被包含在函数调用中的 JSON：
 *
 * callback({ "name": "Nicholas" });
 *
 * JSONP 由两部分组成：回调函数和数据。回调函数是当响应到来时应该在页面中调用的函数。
 * 回调函数的名字一般是在请求中指定的。而数据就是传入回调函数中的 JSON 数据。
 *
 * JSONP 是通过动态 <script> 元素来使用的，使用时可以为 src 属性指定一个跨域 URL。
 * 这里的 <script> 元素与 <img> 元素类似，都有能力不受限制地从其他域加载资源。
 * 因为 JSONP 是有效的 JavaScript 代码，所以在请求完成后，即在 JSONP 响应加载到页面中以后，就会立即执行。
 */

var script = document.createElement("script");
// 典型的 JSONP 请求，通过查询字符串来指定 JSONP 服务的回调参数，这里指定的回调函数的名字叫 handleResponse()
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);

function handleResponse(response){// response 是 JSON 数据
    alert("You’ re at IP address " + response.ip + ", which is in " +
        response.city + ", " + response.region_name);
}

/**
 * 与图像 Ping 相比，它的优点在于能够直接访问响应文本，支持在浏览器与服务器之间双向通信。
 * 不过，JSONP 也有两点不足:
 * 首先，JSONP 是从其他域中加载代码执行。如果其他域不安全，很可能会在响应中夹带一些恶意代码，
 * 而此时除了完全放弃 JSONP 调用之外，没有办法追究。因此在使用不是你自己运维的 Web 服务时，一定得保证它安全可靠。
 * 其次，要确定 JSONP 请求是否失败并不容易。
 */