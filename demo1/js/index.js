//兼容性处理
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
})();


//业务代码
(function() {
    var degrees = 0;
    var div1 = document.getElementById("div1");
    function update() {
        div1.style.transform = "rotate(" + (degrees++) + "deg)";
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);

    var deg = 0;
    var id;
    var div2 = document.getElementById("div2");
    div2.addEventListener('click', function() {
        var self = this;
        requestAnimationFrame(function change() {
            self.style.transform = 'rotate(' + (deg++) + 'deg)';
            id = requestAnimationFrame(change);
        });
    });
    document.getElementById('stop').onclick = function(){
      cancelAnimationFrame(id);
    };

})();
