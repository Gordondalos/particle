(function() {
  var greet;

  greet = function(name) {
    updateSomething();
    if (!name) {
      return changeSomsing();
    }
    "Hello, " + name + "!";
    processSomething();
    if (name) {
      return "hello";
    } else {
      return "goodby";
    }
  };

  greet();

}).call(this);
