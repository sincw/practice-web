function getEle(id){
    if(!document.getElementsByClassName){
        document.getElementsByClassName = function getElementsByClassName(node, className) {
            if (node.getElementsByClassName) {
                // 使用现有方法
                return node.getElementsByClassName(className);
            } else {
                // 循环遍历所有标签，返回带有相应类名的元素
                var results = [],
                    elems = node.getElementsByTagName("*");
                for (var i = 0, len = elems.length; i < len; i++) {
                    if (elems[i].className.indexOf(className) != -1) {
                        results[results.length] = elems[i];
                    }
                }
                return results;
            }
        }
    }

    if(!id){
        return;
    }
    if(id.indexOf('.') == 0){
        id = id.substring(1,id.length);
        return document.getElementsByClassName(id)
    }
    if(id.indexOf('#') == 0){
        id = id.splice(1,id.length-1);
        return document.getElementById(id)
    }
    return document.getElementsByTagName(id)
}

window.$ = getEle;

function getFristChild(ele){
    return ele.firstElementChild || ele.firstChild;
}

function getLastChild(ele){
    return ele.lastElementChild || ele.lastChild;
}

function getChild(ele){
    return ele.childNodes || ele.children;
}

function getPreEle(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}

function getPreEle(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}

function getStyle(ele, attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}

function getAttr(ele,attr){
    return ele.getAttribute(attr);
}


function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset !== undefined) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


