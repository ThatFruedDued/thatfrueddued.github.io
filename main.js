(function(){
  window.setInterval(function(){
    classget("button").forEach(btn => {
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
