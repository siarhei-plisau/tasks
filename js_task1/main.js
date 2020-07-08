function sum(a, b) {
  if ( typeof(a) === 'string' ) a = parseFloat(a.replace(/,/, '.'));
  if ( typeof(b) === 'string' ) b = parseFloat(b.replace(/,/, '.'));
  return (+a + +b)
}
console.log( sum(1, 2) );


function sub(a, b) {
  return (a - b)
}
console.log( sub(2, 1) );


function multiply(a, b) {
  return (a * b)
}
console.log( multiply(5, 3) );


function percentage(a, percent) {
  return (a * percent/100);  
}
console.log( percentage(10, 5) );


function div(a, b) {
  return a / b;
}
console.log( div(1, 2) );


function integerDiv(a, b) {
  return +b === 0 ? null : ~~(a / b);
}
console.log( integerDiv(9, 2) );


function abs(a) {
  let tempValue = a;
  return +tempValue < 0 ? -(+tempValue) : +tempValue;
}
console.log( abs(-1) );


function sqr(x) {
  return (x * x)
}
console.log( sqr(5) );


function sqrN(x, n) {
  return (+x) ** (+n);
}
console.log( sqrN(2, 4) );
console.log( sqrN(2, 0) );
console.log( sqrN(2, -1) );


function factorialLoop(x) {
  let result = 1;
  if (x < 0) return null; 
  if (x === 0) return result;
    
  do {
    result *= x;
    x--;
  } while (x > 1);

  return result;
}
console.log( factorialLoop(4) );

function factorialRecursion(x) {
  if (x < 0) return null; 
  if (x === 0) return 1;
  return x === 1 ? 1 : x * factorialRecursion(x-1); 
}
console.log( factorialRecursion(4) );


function round(x) {

  if ( isNaN(x) ) return 'Incorrect number';

  function getNumberAfterDot(value) {
    const stringValue = String(value);
    const positionDot = stringValue.indexOf('.');
    if ( positionDot === -1) return false;
    return +stringValue[positionDot+1];
    }

    function roundPositiveNumber(value) {
      if ( !getNumberAfterDot(x) ) return +x;
      if ( getNumberAfterDot(x) >= 5) {
        return ~~(+x+1);
      } else return ~~x;
    }

    function roundNegativeNumber(value) {
      if ( !getNumberAfterDot(x) ) return +x;
      if ( getNumberAfterDot(x) >= 5) {
        return ~~(+x+(-1));
      } else return ~~x;
    }

    if ( x >= 0 ) {
      return roundPositiveNumber(x);
    } else {
      return roundNegativeNumber(x);
    }
}
console.log(round(5.8));
console.log(round(5.2));
console.log(round(-2.8));
console.log(round(-2.2));

function insideLoop(startCount, endCount) {
  const item = '*';
  let tempString = ''
  for (let j = startCount; j < endCount; j++) {
    tempString += item + ' ';
  }
  return tempString;
}

function rectangle(width, height) {
  let stringRectangle = '';
  
  for (let i = 0; i < height; i++) {
    stringRectangle += insideLoop(0, width);
    stringRectangle += '\n';
  }
    return stringRectangle;
}
console.log( rectangle(8, 4) );


function rightTriangle(lines) {
  const space = ' ';
  let stringRightTriangle = '';
  for (let i = 1; i <= lines; i++) { 
    stringRightTriangle += insideLoop(0, i);
    stringRightTriangle += '\n'; 
  }
  return stringRightTriangle;
}
console.log( rightTriangle(7) );


function equilateralTriangle(lines) {
  const item = '*';
  const space = ' ';
  let stringEquilateralTriangle = '';
  for (let i = 0; i < lines; i++) {
    for (let k = lines; k > i - 1; k--) {
      stringEquilateralTriangle += space;
    }
    for (let j = 0; j < i + 1; j++) {
      stringEquilateralTriangle += space + item;
    }
    stringEquilateralTriangle += '\n';
  }
  return stringEquilateralTriangle;
}
console.log( equilateralTriangle(17) );


function rhombus(lines) {
  lines++;
  const space = ' ';
  const item = '*';
  let stringResult = '';

  for (let i = 1; i <= lines; i++) {
    let stringRhombus1 = '';
    for (let j = lines-i; j > 0; j--) {
      stringRhombus1 += space + space;
    }
    for (let j = 1; j <= i*2-1; j++) {
      stringRhombus1 += space + item;
    }
    stringResult += stringRhombus1 + '\n';
  }

  for (let i = 2; i <= lines; i++) {
    let stringRhombus2='';
    for (let j = 0; j < i-1; j++) {
      stringRhombus2+= space + space;
    }
    for (let j = (lines-i) * 2+1; j > 0; j--) {
      stringRhombus2 += space + item;
    }
    stringResult += stringRhombus2 + '\n';
  }
  return stringResult;
}
console.log( rhombus(2) );


