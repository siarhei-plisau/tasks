// --------------task1--------------
const Mammal = { 
  eat: function() { console.log(`${this.name} is eating`) } 
} 
 
const Human = { 
  run: function() { console.log(`${this.name} is running`) } 
}

function Man(name, age) { 
  this.name = name; 
  this.age = age; 
}
Object.setPrototypeOf(Human, Mammal);
Man.prototype = Human;
function spawn(funcConstructor, ...args) {
  const myObject = Object.create(funcConstructor.prototype); 
  funcConstructor.apply(myObject, args);
  return  myObject;
}
const myObject = spawn(Man, 'Elena', 23);
console.log(myObject.name);
console.log(myObject.age);
myObject.eat();
myObject.run(); 


// --------------task2--------------
let junior = { 
    experience: 1, 
    }; 
let fullstack = { 
    salary: 3000 
    }; 
let architect = { 
    knowlege: 100500 
}; 
let webdev = { 
    efficiency: 100 
    };
function creatChainInharitance(...arg) {
   arg.forEach( (item, i, arr) => {
      if ( i < arr.length-1 )  Object.setPrototypeOf(arr[i], arr[i+1])
   });
}
creatChainInharitance(webdev, architect, fullstack, junior);
console.dir(webdev);

// --------------task3--------------
Object.prototype.toString = function() {
return Object.entries(this).map( ([key, value]) =>  [key + ': ' + value]  ).join();
}
const obj = { 
  prop1: 1, 
  prop2: 2, 
  prop3: 3, 
}
// alert(obj);
console.log( obj.toString() );

// --------------task4--------------
function add(a,b) {
  // alert(a + b );
  console.log(a+b);
  }
  Function.prototype.delay = function(time) {
    return (...arg) => {
      let bindFunc = this.bind(this, ...arg);
      setTimeout(bindFunc, time);
    }
  }
  add.delay(3000)(1, 2);

// --------------task5--------------
const starts = (self) => ({
  start: () =>  console.log(`${self.name} start from ${self.startPoint}`),
});

const moves = (alongPath) => ({
  move: (alongPath) => console.log(`moves along ${alongPath}`),
});

const honks = (level) => ({
  honk: (level) => console.log(`honks ${'Bip'.repeat(level)}`),
});

const shoots = (target) => ({
  shoot: (target) => console.log(`shoots at ${target}`),
});

const Vehicle = (name, startPoint) => {
  const vehicle = {
    name,
    startPoint,
  };
  return Object.assign(vehicle, starts(vehicle), moves());
};

const Car = (name, startPoint) => {
  const car = {
    name,
    startPoint,
  };
  return Object.assign(car, starts(car), moves(), honks());
};

const Tank = (name, startPoint) => {
  const tank = {
    name,
    startPoint,
  };
  return Object.assign(tank, starts(tank), moves(), shoots());
};

const Bicycle = (name, startPoint) => {
  const bicycle = {
    name,
    startPoint,
  };
  return Object.assign(bicycle, moves());
};

const russianTank = Tank('T90', 'Moscow');
russianTank.start();
russianTank.move('fields');
russianTank.shoot('enemy');

const ItalianCar = Car('Fiat Punto', 'Rome');
ItalianCar.start();
ItalianCar.move('road');
ItalianCar.honk(3);