var utils = {
    scroll: function (event) {
        var top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        var left = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft;
        return {
            "top": top,
            "left": left
        }
    },
    page: function (event) {
        var event = event || window.event;
        var pagex = event.pageX || this.scroll().left + event.clientX;
        var pagey = event.pageY || this.scroll().top + event.clientY;
        return {
            x: pagex,
            y: pagey,
            ex: event.clientX,
            ey: event.clientY
        };
    }
};


