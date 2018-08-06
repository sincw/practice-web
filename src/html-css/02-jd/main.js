var boxs = getEle('.box');
for(var i = 0;i<boxs.length;i++){
    fn(boxs[i]);
}

function fn(element) {
    var arra = element.getElementsByTagName("a");
    var pages = element.getElementsByClassName("page");
    for(var n = 0 ;n<arra.length;n++){
        arra[n].onmouseover = function(){
            for (var i = 0 ;i<arra.length;i++){
                arra[i].className = arra[i].className.replace('active','');
                arra[i].index = i;
                pages[i].className = pages[i].className.replace('active','');
            }

            this.className = this.className + ' active';
            pages[this.index].className = pages[this.index].className + ' active';
        }
    }
}


(function(element){
    var bgnum = 1;
    var bgWidth = 590;
    var order = element.getElementsByClassName('slider-order')[0];
    var bg = element.getElementsByClassName('slider-bg')[0];

    var len = bg.children.length;
    bg.style.width = (len + 2) * bgWidth + 'px';
    for (var i = 0;i<len;i++){
        var li = document.createElement("li")
        if(i==0){
            li.className = "active";
        }
        order.appendChild(li);
    }

    function animate(ele,target) {
    clearInterval(ele.timer);
    var s = 10;
    var ms = 20;
    var speed = target > ele.offsetLeft ? s : 0 - s;
    ele.timer = setInterval(function(){
        var val = target - ele.offsetLeft;
        if(Math.abs(val) < Math.abs(speed)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }else{
            ele.style.left = ele.offsetLeft + speed + "px";
        }
    },ms)
}
    var orders = order.getElementsByTagName('li');

    var frist = bg.children[0];
    var last = bg.children[len-1];
    bg.appendChild(frist.cloneNode(true));
    bg.insertBefore(last.cloneNode(true),frist);

    for(var i =0;i<orders.length;i++){
        orders[i].index = i + 1;
        orders[i].onmouseover = function (ev) {
            for(var j =0;j<orders.length;j++){
                orders[j].className = '';
            }
            bgnum = this.index;
            this.className = 'active';
            animate(bg,-this.index * bgWidth)
        }
    }

    function next() {
        ++bgnum;
        if(bgnum>len){
            bgnum = 1;
            bg.style.left = "0px";
        }
        for(var j =0;j<len;j++){
            orders[j].className = '';
        }
        orders[bgnum-1].className = 'active';
        animate(bg,-bgnum * bgWidth);
    }

    function pre() {
        --bgnum;
        if(bgnum < 0){
            bgnum = len-1;
            bg.style.left = -bgWidth * (len) + "px";
        }
        for(var j =0;j<len;j++){
            orders[j].className = '';
        }
        var aa = bgnum==0?len-1 : bgnum-1;
        orders[aa].className = 'active';
        animate(bg,-bgnum * bgWidth);
    }

    element.getElementsByClassName('arrow-left')[0].onclick = pre;

    element.getElementsByClassName('arrow-right')[0].onclick = next;

//5.添加定时器
    var timer = setInterval(next, 3000);

    element.onmouseover = function () {
        clearInterval(timer);
    }

    element.onmouseout  = function () {
        timer = setInterval(next, 3000);
    }

})(getEle('.main-slider')[0]);

// function animate(ele,target) {
//     clearInterval(ele.timer);
//     var s = 10;
//     var ms = 20;
//     var speed = target > ele.offsetLeft ? s : 0 - s;
//     ele.timer = setInterval(function(){
//         var val = target - ele.offsetLeft;
//         if(Math.abs(val) < Math.abs(speed)){
//             ele.style.left = target + "px";
//             clearInterval(ele.timer);
//         }else{
//             ele.style.left = ele.offsetLeft + speed + "px";
//         }
//     },ms)
// }
//
// var bg = getEle(".slider-order")[0];
// var img = getEle(".slider-bg")[0];
// var bgs = bg.getElementsByTagName('li');
// var bgWidth = 590;
//
// var bgnum = 1;
//
//
//
//
//
//
// var len = img.children.length;
// img.style.width = (len + 2) * bgWidth + 'px';
// var square = getEle(".slider-order")[0];
// for (var i = 0;i<len;i++){
//     var doc = document.createElement("li")
//     if(i==0){
//         doc.className = "active";
//     }
//     square.appendChild(doc);
// }
//
// var frist = img.children[0];
// var last = img.children[len-1];
//
// img.appendChild(frist.cloneNode(true));
// img.insertBefore(last.cloneNode(true),frist);
//
// for(var i =0;i<bgs.length;i++){
//     bgs[i].index = i + 1;
//     bgs[i].onmouseover = function (ev) {
//         for(var j =0;j<bgs.length;j++){
//             bgs[j].className = '';
//         }
//         bgnum = this.index;
//         this.className = 'active';
//         animate(img,-this.index * bgWidth)
//     }
// }
//
// function next() {
//     ++bgnum;
//     if(bgnum>len){
//         bgnum = 1;
//
//         img.style.left = "0px";
//     }
//     var len2 = square.children.length;
//     for(var j =0;j<len2;j++){
//         square.children[j].className = '';
//     }
//     square.children[bgnum-1].className = 'active';
//     animate(img,-bgnum * bgWidth);
//
// }
//
// function pre() {
//     --bgnum;
//     if(bgnum < 0){
//         bgnum = len-1;
//         img.style.left = -bgWidth * (len) + "px";
//     }
//     var len2 = square.children.length;
//     for(var j =0;j<len2;j++){
//         square.children[j].className = '';
//     }
//     var aa = bgnum==0?len-1 : bgnum-1;
//     square.children[aa].className = 'active';
//     animate(img,-bgnum * bgWidth);
// }
//
// getEle('.arrow-left')[0].onclick = pre;
//
// getEle('.arrow-right')[0].onclick = next;
//
// //5.添加定时器
// var timer = setInterval(next, 3000);
//
// var main = getEle('.main-slider')[0];
// main.onmouseover = function () {
//     //main.style.display = "block";
//     clearInterval(timer);
//     console.info('over');
// }
//
// main.onmouseout  = function () {
//     //main.style.display = "none";
//     timer = setInterval(next, 3000);
//     console.info('out');
// }


