//generatory strumieni liczby

function* naturalNumbers() {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1;
  }
}
//USAGE
//const numbers = naturalNumbers();
//console.log(numbers.next().value)
//console.log(numbers.next().value)

//--------------------------------------------------------------

//generator liczb podniesionych do potęgi 2
function* powerSeries(number, power) {
  let base = number;
  while (true) {
    yield Math.pow(base, power);
    base++;
  }
}

//iterator liczb
function* take(n, iter) {
  let index = 0;
  for (const val of iter) {
    if (index >= n) {
      return;
    }
    index = index + 1;
    yield val;
  }
}

//take(3, ['a', 'b', 'c', 'd', 'e']);
// a b c
//take(7, naturalNumbers());
// 1 2 3 4 5 6 7
//take(5, powerSeries(3, 2));
// 9 16 25 36 49

function* cycled(iter) {
  const arrOfValues = [...iter];
  while (true) {
    for (const val of arrOfValues) {
      yield val;
    }
  }
}
console.log(...take(10, cycled(take(3, naturalNumbers()))));
// 1 2 3 1 2 3 1 2 3 1

console.log(...take(170, naturalNumbers()));

/*
function* mygen() {
  yield* [1, 2, 3];
  yield* 'Hi';
  yield* arguments;
}

const genus = mygen(10, 100);

console.log(genus.next());
console.log(genus.next());
console.log(genus.next());
console.log(genus.next());
console.log(genus.next());
console.log(genus.next());
console.log(genus.next());
console.log(genus.next());*/

function apiCall() {
  return new Promise(resolve => {
    setInterval(() => {
      resolve([{ name: 'andrzej', age: 42 }, { name: 'iza', age: 41 }]);
    }, 3000);
  });
}

function* apiIter() {
  const data = yield apiCall();
}

const gen = apiIter();

gen.next().value.then(n => console.log(n));
