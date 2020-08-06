// ___________Task1__________
function getRandomIntegerNumber(min, max) {
  return Math.round( min - 0.5 + Math.random() * (max - min + 1) );
}

function creatRundomArray(quantityElems) {
  return Array.from(new Array(quantityElems), () => getRandomIntegerNumber(-99, 99) );

}
const targetArray1 = creatRundomArray(7);
const totalSum = targetArray1.reduce((sum, current) => sum + current, 0);
console.log(`---------Task1-------`);
console.log(`Target array: ${targetArray1}`);
console.log(`The lagest value: ${Math.max(...targetArray1)}`);
console.log(`The smallest value: ${Math.min(...targetArray1)}`);
console.log(`The total sum: ${totalSum}`);
console.log(`The arifmetics mean: ${(totalSum/targetArray1.length).toFixed(2)}`);

// ___________Task2__________
function changMainDiagonalOfArray() {
  let currentArray = Array.from(Array(5), () => creatRundomArray(5) );
  console.table(currentArray);
  currentArray.forEach( (item, i) => {
    if ( item[i] < 0 ) {
      item[i] = 10;
      return;
    }
    item[i] > 0 && (item[i] = 20)
  });
  return currentArray;
}
console.log(`---------Task2-------`);
console.table(changMainDiagonalOfArray());


// ___________Task3__________

console.log(`---------Task3-------`);
console.log(`Array after changing: ${Array.from(Array(20), (item, index) => index*5 )}`);

// ___________Task4__________
function getMaxSequenceOfEqueilElems(array) {
  if (!array.length) throw new Error('array is empty');
  let begin = 0; 
  let end = 0;
  let tempArray = []; 
  for(let i = 1; i < array.length; i++) {
    if ( array[i] === array[i - 1] ) {
        end = i;
    } else {
        tempArray.push(array.slice(begin, end + 1));
        begin = i;
        end = i;
    }
  }
 tempArray.push(array.slice(begin, end + 1));
  return !tempArray.length ? [] : tempArray.sort( (a, b) => b.length - a.length )
                                           .filter( (item, i, array) => array[0].length === array[i].length )
                                           .sort( (a, b) => b[0] - a[0] )[0]
}
console.log(`---------Task4-------`);
const array1 = [1,1,1,1,2,2,2,2,3,3,3,4,4,4];
const array2 = [1,2,3,4,5];
console.log( getMaxSequenceOfEqueilElems(array1) );
console.log( getMaxSequenceOfEqueilElems(array2) );

// ___________Task5__________
function getMaxIncreasingSequence(array, quantificator) {
  if (!array.length) throw new Error('array is empty');
  let begin = 0; 
  let end = 0;
  let tempArray = []; 
  for(let i = 1; i < array.length; i++) {
    if ( array[i] === (array[i - 1]+quantificator) ) {
        end = i;
    } else {
        ( begin - end ) && tempArray.push(array.slice(begin, end + 1));
        begin = i;
        end = i;
    }
  }
  ( begin - end ) && tempArray.push(array.slice(begin, end + 1));
  return !tempArray.length ? [] : tempArray.sort( (a, b) => b.length - a.length )[0]
                                           
}
console.log(`---------Task5-------`);
const array3 = [1,2,3,4,0,0,6,7,8,,3,3,4,4,4];
const array4 = [1,1,1,1,1];
console.log( getMaxIncreasingSequence(array3, 1) );
console.log( getMaxIncreasingSequence(array4, 1) );

// ___________Task6__________
function getMostFrequentNumber(array) {
  if (!array.length) throw new Error('array is empty');
  const bufferArrayOfAccordance = [];
  const currentArray = array.slice();
  const buferDubbleItems = [];
  currentArray.some( (item) => {
    if ( !buferDubbleItems.includes(item) ) { 
      buferDubbleItems.push(item);
      bufferArrayOfAccordance.push( currentArray.filter((elem2) => item === elem2) );
    }
  });
  bufferArrayOfAccordance.sort( (a, b) => b.length - a.length );
  console.log(`${bufferArrayOfAccordance[0][0]} (${bufferArrayOfAccordance[0].length} times)`);
}
const array5 = [1,1,2,2,2,2,3,1,4,2];
// const array5 = [];

console.log(`---------Task6-------`);
getMostFrequentNumber(array5);

// ___________Task7__________
function getIndexOfElement(array, targetElement, first = 0, last = array.length-1) {
  const IndexMiddleOfArray = Math.floor( (first + (last - first)/2) );
  if ( array[IndexMiddleOfArray] == targetElement ) return IndexMiddleOfArray;
  if ( (last - 1) === first)  return array[first] === targetElement ? first : last;
  if ( targetElement > array[IndexMiddleOfArray] ) return getIndexOfElement(array, targetElement, IndexMiddleOfArray, last);
  if ( targetElement < array[IndexMiddleOfArray] ) return getIndexOfElement(array, targetElement, first, IndexMiddleOfArray);
}
// const array6 = [1,3,5,7,9,11,13,15,17,19,21,23];
const array6 = [1,3,5,6,7];

console.log(`---------Task7-------`);
console.log( getIndexOfElement(array6, 7));

// ___________Task8__________
function increasingSelectionSort (array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;
    const newIndexMin = array.slice(i).reduce((previous, item, i, array) => array[i] < array[previous] ? i : previous, 0) + indexMin;
    newIndexMin > indexMin && (indexMin = newIndexMin);
    indexMin !== i && ( [array[i], array[indexMin]] = [array[indexMin], array[i]] );
    
  }
return array; 
}
const array7 = [23,21,19,10,9,0,-1,4];
console.log(`---------Task8-------`);
console.log(`Before sort: ${array7}`);
console.log(`After sort: ${increasingSelectionSort(array7)}` );