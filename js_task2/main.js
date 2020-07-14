function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log('result reverseString', reverseString('Islands of the Earth') );


function endsWith(str, substr) {
  const reverseStr = reverseString(str);
  const reverseSubstr = reverseString(substr);
  return startsWith(reverseStr, reverseSubstr)
}
console.log('result endsWith', endsWith('Islands of the Earth', 'Earth') );


function startsWith(str, substr) {
  const resultSearch = str.indexOf(substr);
  return resultSearch === 0 ? true : false;
}
console.log('result startsWith', startsWith('How long does it take you to get there', 'How long') );


function callBacKforCheckCase(...arg) {
  return function(elem) {
    const isLowerCase = !(elem.toUpperCase() == elem);
    return (
      elem !== arg[0] && elem !== arg[1] && isLowerCase
    )
  }
}

function isKebabCase(str) {
  const arrayPartOfString = str.trim().split('-');
  if ( arrayPartOfString.length == 1 ) return false;
  function checkWorstItem(item) {
    if ( item === '' ) return false;
    const result = [...item].every( callBacKforCheckCase(' ', '_') );
    return result;
  }
  const arrayRightParts = arrayPartOfString.filter(checkWorstItem);
  return arrayRightParts.length == arrayPartOfString.length ? true : false;
}
console.log( 'result kebab', isKebabCase(' hitech ') );
console.log( 'result kebab', isKebabCase(' hi-tech ') );
console.log( 'result kebab', isKebabCase(' hi-Tech ') );


function isSnakeCase(str) { 
  const arrayPartOfString = str.trim().split('_');
  if ( arrayPartOfString.length == 1 ) return false;
  function checkWorstItem(item) {
    if ( item === '' ) return false;
    const result = [...item].every( callBacKforCheckCase(' ', '-') );
    return result;
  }
  const arrayRightParts = arrayPartOfString.filter(checkWorstItem);
  return arrayRightParts.length == arrayPartOfString.length ? true : false;
}
console.log('result snake', isSnakeCase('hi_tech') );
console.log('result snake', isSnakeCase('hi_t-ech') );
console.log('result snake', isSnakeCase('hi_Tech') );

function isCamelCase(str) {
  const arrayMatches = str.match(/([a-z,\d+]+[A-Z,\d+]*)*/g);
  if ( arrayMatches.join('') === str ) {
    return true;
  } else return false;
}
console.log( 'result CamelCase', isCamelCase('email') );
console.log( 'result sCamelCase', isCamelCase('eMailMyFriend') );
console.log( 'result CamelCase', isCamelCase('e_mail') );


function isNaN(value) {
  return value !== value;
}
console.log( 'result isNaN', isNaN(+'d') );

function isFinite(value) { 
  const positivInfinity = 1/0;
  const negativInfinity = 1/-0;
  return value === positivInfinity || value === negativInfinity ? true : false; 
} 
console.log('result Infinity', isFinite(1/0) );


function isFalsy(value) { 
  return !value;
} 
console.log('result isFalsy', isFalsy(NaN));
console.log('result isFalsy', isFalsy(null));
console.log('result isFalsy', isFalsy(''));
console.log('result isFalsy', isFalsy(undefined));
console.log('result isFalsy', isFalsy(0));
console.log('result isFalsy', isFalsy(false));

function findWordInText(text, word, register) {
  if ( !register ) {
    text = text.toLowerCase();
    word = word.toLowerCase();
  }
  let position = 0;
  let count = 0;
  while (true) {
    let posResult = text.indexOf(word, position);
    if (posResult !== -1) {
    count ++;
    position = posResult + word.length;
    } else break;
  }
  return count;
}
console.log('result findWordInText', findWordInText('Hi there! I\'d like to offer you good idea!', 'like', true) );



function getIntervalIntegerNumber(a ,b) {
  const resultArr = [];
  for (let i = a; i <= b; i++) {
    resultArr.push(i);
  }
  return resultArr;
}
console.log('result IntervalIntegerNumber', getIntervalIntegerNumber(1,5) );


function getIntervalOddIntegerNumber(a, b) {
  return getIntervalIntegerNumber(a, b).filter( item => item%2 > 0);
}
console.log('result getIntervalOddIntegerNumber', getIntervalOddIntegerNumber(1,10) );


function getlastNumberWord(number) {
  const arrWords = [
    'zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine'
  ];
  const arrNumbers = (number + '').split('');
  return arrWords[ arrNumbers.pop()];
}
console.log('result getlastNumberWord', getlastNumberWord(23) );


function createFunctions(quantity) {
  const arrOfFunction = [];
  for (let i = 0; i < quantity; i++) {
    arrOfFunction.push(function() { return i;});
  }
  console.log(arrOfFunction );
  return (function() {return arrOfFunction})();
  
}
const callbacks = createFunctions(5);
console.log('result creatFunction', callbacks[3]() );
console.log('result creatFunction', callbacks[2]() );
