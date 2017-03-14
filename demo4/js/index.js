(function(){
  var oTab = document.getElementById("tabs");
  var oUl = oTab.getElementsByTagName("ul")[0];
  var oLis = oUl.getElementsByTagName("li");
  var oDivs = oTab.getElementsByTagName("div");
  for (var i = 0, len = oLis.length; i < len; i++) {
      oLis[i].onclick = function(event) {
          for (var n = 0; n < len; n++) {
              if (oLis[n] != event.target) {
                  oLis[n].classList.remove("on");
                  oDivs[n].classList.add("hide");
              } else {
                  oLis[n].classList.add("on");
                  oDivs[n].classList.remove("hide");
              }
          }
      };
  }
})();
