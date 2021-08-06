//iterator listujący pola/atrybuty obiektu klasy

const instance = {
  name: 'Karol',
  age: 10
};

function processing() {
  for (const key in instance) {
    console.log(instance[key]);
  }
}

const run = () => {
  this.processing();
};

//przykład prostego iteratora
const iterSample = () => {
  const tab = ['Ala', 'Bala', 'Cala'];
  const iterator = tab[Symbol.iterator]();

  console.log(iterator.next()); //{value: "Ala", done: false}
  console.log(iterator.next()); //{value: "Bala", done: false}
  console.log(iterator.next()); //{value: "Cala", done: false}
  console.log(iterator.next()); //{value: undefined, done: true}
};

const iterSample = () => {
  const txt = 'Ala ma kota';
  const tab = ['Ala', 'Bala', 'Cala'];
  const set = new Set();
  const map = new Map();

  console.log(txt[Symbol.iterator]); //function Symbol.iterator
  console.log(tab[Symbol.iterator]); //function Symbol.iterator
  console.log(set[Symbol.iterator]); //function Symbol.iterator
  console.log(map[Symbol.iterator]); //function Symbol.iterator

  const txt1 = 'Aleksandra ma kota';
  const tab1 = ['Aleksandra', 'Izabela', 'Andrzej'];
  console.log(...tab1); //"Ala", "Bala", "Cala"
  console.log(...txt1); //"A", "l", "a"...
};
