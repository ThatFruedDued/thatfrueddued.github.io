(function(){
  window.setInterval(function(){
    Array.prototype.forEach.call(classget("button"), btn => {
      btn.height = Math.floor((window.innerHeight - 20) / classget("button").length - 20).toString() + "px";
      btn.width = (window.innerWidth - 20).toString() + "px";
    });
  });

  function idget(id) {
    return document.getElementById(id);
  }
  function classget(c) {
    return document.getElementsByClassName(c);
  }
})();
