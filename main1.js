// В браузере запрашиваются два числа. Если первое больше второго, то вычислить их сумму,
//иначе - произведение. После этого компьютер должен вывести alert ЗАДАЧА РЕШЕНА

let word = prompt("Биринчи санды санды жазыныз");
let word1 = prompt("Экинчи санды жазыныз");

word = parseInt(word);
word1 = parseInt(word1);

function numberWord() {
  if (word > word1) {
    console.log(word + word1);
  } else if (word <= word1) {
    console.log("PROBLEM SOLVED");
  }
}

numberWord(word, word1);
