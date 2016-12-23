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
