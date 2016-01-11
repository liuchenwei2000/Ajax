
function testProgress() {

    var xhr = new XMLHttpRequest();

    /**
     * load 事件，用以替代 readystatechange 事件。
     * 响应接收完毕后将触发 load 事件，因此也就没有必要去检查 readyState 属性了。
     * 而 onload 事件处理程序会接收到一个 event 对象，其 target 属性就指向 XHR 对象实例，
     * 因而可以访问到 XHR 对象的所有方法和属性。
     */
    xhr.onload = function(event){
        // 并非所有浏览器都为这个事件实现了适当的事件对象
        var _xhr = event.target;
        // 只要浏览器接收到服务器的响应，不管其状态如何，都会触发 load 事件。
        // 而这意味着你必须要检查 status 属性，才能确定数据是否真的已经可用。
        if ((xhr.status >= 200 && xhr.status < 300) ||
            xhr.status == 304){
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    };

    /**
     * progress 事件会在浏览器接收新数据期间周期性地触发。
     * 而 onprogress 事件处理程序会接收到一个 event 对象，其 target 属性是 XHR 对象，但包含着三个额外的属性：
     *
     * lengthComputable : 表示进度信息是否可用的布尔值
     * position : 表示已经接收的字节数
     * totalSize : 表示根据 Content-Length 响应头部确定的预期字节数
     *
     * 有了这些信息，就可以为用户创建一个进度指示器。
     *
     * 为确保正常执行，必须在调用 open() 方法之前添加 onprogress 事件处理程序。
     */
    xhr.onprogress = function(event){
        var divStatus = document.getElementById("status");
        if (event.lengthComputable){
            divStatus.innerHTML = "Received " + event.position + " of " +
                event.totalSize +" bytes";
        }
    };

    xhr.open("POST", "/ajax/change.do", true);
    xhr.send(null);
}
