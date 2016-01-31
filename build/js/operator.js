(function() {
  var autor, book, car, model, pages, ref, ref1, type;

  first && second;

  true || false;

  first && srcond;

  true || false;

  !isReady || !isOnline;

  a === b;

  a !== b;

  a === b;

  a !== b;

  a === !b;

  if ((10 < a && a < 20)) {
    update(a);
  }

  ref = ["1924", "Oneel", "325"], book = ref[0], autor = ref[1], pages = ref[2];

  car = {
    model: "porche",
    motor: {
      type: "v8",
      hp: 456
    },
    cost: 600000
  };

  model = car.model, (ref1 = car.motor, type = ref1.type);


  /*
    ***********************
   */

  country === "Russia" || country === "USA" || country === "UK" || country === "Germany";


  /*
    проверка на нал и андефайн экзенстенциальный оператора ?
   */

  if (book == null) {
    book = 0;
  }

  if (book != null) {
    if (typeof open === "function") {
      open(book);
    }
  }


  /*
    то есть открой бук если он не нул
    а также проверим является ли опен функциеей
   */

}).call(this);
