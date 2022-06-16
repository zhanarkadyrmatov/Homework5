// В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10.
// Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу,
// где дом, забора нет.

let a = 20;
let b = 10;
function areaRectangular(a, b) {
  console.log(`Уйдун аянты: ${a * b}`);
}
areaRectangular(a, b);

let c = 50;
let d = 30;
function areaRectangular2(c, a, d, b) {
  let formula = c - a;
  let formula2 = d - b;
  return `Калган аянты ${formula * formula2}`;
}

console.log(areaRectangular2(c, a, d, b));

function areaRectangular3(c, a, d, b) {
  let formula = c - a;
  let formula2 = d - b;
  return `Тосмонунун узундугу: ${formula + formula2}`;
}

console.log(areaRectangular3(c, a, d, b));
