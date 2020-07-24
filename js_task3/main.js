function isObject(obj) {
  if ( obj === null || Object.prototype.toString.call(obj) === '[object Array]') return false;
  return typeof obj === 'object'
}
console.log('result isObject', isObject({}) );
console.log('result isObject', isObject(null) );
console.log('result isObject', isObject([]) );



function isFunction(fn) {
  return typeof fn === 'function';
}
console.log('result isFunction', isFunction(class C {}) );
console.log('result isFunction', isFunction(new Function()) );
console.log('result isFunction', isFunction(undefined) );

// Аналог Object.keys(obj)
function keys(obj) {
  if ( !isObject(obj) )  throw new Error('value is not object');
  const resultArray = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) resultArray.push(key);
  }
  return resultArray;
}
const obj1 = {c: '3', d:'4' };
const obj2 = {a: '1', b:'2', __proto__: obj1};
console.log('result keys', keys(obj2));
// console.log('result keys', keys('2'));



function allKeys(obj) {
  if ( !isObject(obj) )  throw new Error('value is not object');
  const resultArray = [];
  for (const key in obj) {
    resultArray.push(key);
  }
  return resultArray;
}
console.log('result allKeys', allKeys(obj2) );



// Аналог Object.values(obj)
function value(obj) {
  if ( !isObject(obj) )  throw new Error('value is not object');
  const resultArray = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) resultArray.push(obj[key]);
  }
  return resultArray;
}
console.log('result value', value(obj2) );
// console.log('result value', value('5') );


// Аналог Object.entries(obj)
function pair(obj) {
  if ( !isObject(obj) )  throw new Error('value is not object');
  const resultArray = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key))  resultArray.push([key, obj[key]]);
  }
  return resultArray;
}
console.log('result pair', pair(obj1) );


function functions(obj) {
  if ( !isObject(obj) )  throw new Error('value is not object');
  const resultArray = [];
  for (const key in obj) {
    if ( obj.hasOwnProperty(key) && isFunction(obj[key]) ) resultArray.push(obj[key].name);
  }
  return resultArray.sort();
}

const obj3 = {
  surname: 'Ivanov',
  name: 'Viktor',
  getName: function(age, birthday) { return `${this.name} is ${age} old. Year of birth ${birthday}`; },
  getFullName: function fullName() { return this.name + this.surname; },
  getSurname: function() {return this.surname;},
};
console.log('result functions', functions(obj3) );

 function bind(func, context) {
  const bindArgArray = value(arguments).slice(2);

  return function() {
          const funcArg = value(arguments);
          return func.apply(context, bindArgArray.concat(funcArg));
          }
}
console.log('result Bind:', bind(''.slice, '12345')(1, 3) ); 
console.log('result Bind:',  bind(obj3.getName, obj3, '20 years', '2000')() );