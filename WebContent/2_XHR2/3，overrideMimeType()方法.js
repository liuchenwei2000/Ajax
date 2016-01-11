/**
 * overrideMimeType() 方法，用于重写 XHR 响应的 MIME 类型。
 * 因为返回响应的 MIME 类型决定了 XHR 对象如何处理它，
 * 所以提供一种方法能够重写服务器返回的 MIME 类型是很有用的。
 */
function testOverrideMimeType() {

    var xhr = new XMLHttpRequest();

    /**
     * 服务器返回的 MIME 类型是 text/plain，但数据中实际包含的是 XML。
     * 根据 MIME 类型，即使数据是 XML，responseXML 属性中仍然是 null。
     * 通过调用 overrideMimeType() 方法，可以保证把响应当作 XML 而非纯文本来处理。
     * 调用 overrideMimeType() 必须在 send() 方法之前，才能保证重写响应的 MIME 类型。
     */
    xhr.open("POST", "/ajax/about.do", true);
    xhr.overrideMimeType("text/xml");
    xhr.send(null);
}
