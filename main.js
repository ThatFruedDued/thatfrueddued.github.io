(function(){
  window.setInterval(function(){
    Array.prototype.forEach.call(classget("button"), btn => {
      btn.style.height = Math.floor((window.innerHeight - 20) / classget("button").length - 20).toString() + "px";
      btn.style.width = (window.innerWidth - 20).toString() + "px";
    });
  }, 0);

  function idget(id) {
    return document.getElementById(id);
  }
  function classget(c) {
    return document.getElementsByClassName(c);
  }
})();
