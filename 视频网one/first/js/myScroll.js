/**
 * Created by 吴增平 on 2018/6/12.
 */
function scroll() {
    // 开始封装自己的scrollTop
    if(window.pageYOffset !== undefined) {
        // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是0,所以需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {
        // 标准浏览器,来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
