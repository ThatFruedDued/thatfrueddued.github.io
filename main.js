(function(){
  window.setInterval(function(){
    Array.prototype.forEach.call(classget("button"), btn => {
      btn.height = window.innerHeight / classget("button").length;
      btn.width = window.innerWidth;
    });
  });

  function idget(id) {
    return document.getElementById(id);
  }
  function classget(c) {
    return document.getElementsByClassName(c);
  }
})();
