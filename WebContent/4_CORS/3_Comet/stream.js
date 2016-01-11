
/**
 * 通过侦听 readystatechange 事件及检测 readyState 的值是否为 3，就可以利用 XHR 对象实现 HTTP 流。
 * 随着不断从服务器接收数据，readyState 的值会周期性地变为 3。
 * 当 readyState 值变为 3 时，responseText 属性中就会保存接收到的所有数据。
 * 此时，就需要比较此前接收到的数据，决定从什么位置开始取得最新的数据。
 */
function testStream() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        var result;
        var received = 0;
        if (xhr.readyState == 3) {
            // 只要 readystatechange 事件发生，而且 readyState 值为 3，就对 responseText 进行分割以取得最新数据。
            result = xhr.responseText.substring(received);
            received += result.length;
            console.log("received:" + result);
        } else if (xhr.readyState == 4) {
            console.log("received complete!");
        }
    };

    xhr.open("GET", "/ajax/change.do", true);
    xhr.send(null);
}
