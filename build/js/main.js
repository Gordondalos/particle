(function() {
  var hi, mycount, mystring, name, user, visa;

  console.log("привет это кофе");


  /*
  мой
  многострочный
  комментарий
   */

  mystring = "";

  mycount = 123;


  /* интерполяция
   */

  name = "gordondalos";

  hi = function() {
    var i, range, range2, results;
    console.log("hello " + name);
    range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return range2 = (function() {
      results = [];
      for (i = -25; i < 35; i++){ results.push(i); }
      return results;
    }).apply(this);
  };

  user = {
    name: "Gordone Dalos",
    age: 33,
    status: "Web Developer",
    skills: {
      css: 9,
      html: 9,
      js: 6,
      sass: 7,
      jade: 6,
      coffee: 3
    },
    gender: "male"
  };


  /*
    синтаксис для регулярных выражений может быть расширен
   */

  visa = /^4[0-9]{12}(?:[0-9]{3})?$/;

  hi();

}).call(this);
