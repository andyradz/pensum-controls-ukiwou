//http://blog.nebula.us/13-javascript-closures-czyli-zrozumiec-i-wykorzystac//-domkniecia

for (var i = 0; i < 5; i++) {
  (function(e) {
    setTimeout(function() {
      console.log(e);
    }, 500);
  })(i);
}
