const tags = [ 
    "cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", 
    "wordpress", "xaml", "js", "http", 
    "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", 
    "js", "cms", "html", "javascript", 
    "http", "http", "CMS"

];
const tagCloud = generateTagCloud(tags, 17, 42);
document.body.append(tagCloud);

function generateTagCloud(array, maxFontSize, minFontSize) {
  const bufferArrayOfAccordance = [];
  const currentArray = array.map( item => item.toLowerCase() );
  const buferDubbleItems = [];
  currentArray.some( (item) => {
    if ( !buferDubbleItems.includes(item) ) { 
      buferDubbleItems.push(item);
      bufferArrayOfAccordance.push( currentArray.filter((elem2) => item === elem2) );
    }
  });
  bufferArrayOfAccordance.sort( (a, b) => b.length - a.length );


  function creatArrayOfSize(arrayOfAccordance, maxFontSize, minFontSize) {
    const arrayOfLength = arrayOfAccordance.map( item =>  item = item.length );
    const maxQuantity = arrayOfLength[0];
    const minQuantity = arrayOfLength[arrayOfLength.length-1];
    const delta = (maxFontSize - minFontSize)/(maxQuantity - minQuantity);
    const arrayOfSize = arrayOfLength.map ( (item, i, array) => {
      if ( array[i] === maxQuantity ) return array[i] = maxFontSize;
      if ( array[i] === minQuantity ) return array[i] = minFontSize;
      return array[i] = +( minFontSize + ( delta * (array[i] - minQuantity) ) ).toFixed(1);
    });
    console.log(arrayOfSize);
  return arrayOfSize;
  }

  function getRandomIntegerNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function creatTags(sortArray, arrayLength) {
    const onceArray = sortArray.map ( item => item[0]);
    let divContainer = document.createElement('div');
    divContainer.style.width = '250px';
    divContainer.style.height = '250px';
    divContainer.style.border = '1px solid black';
    const arrayBuffer = [];
    while (true) {
      let numberOfItem  = getRandomIntegerNumber(0, onceArray.length - 1);
      if ( arrayBuffer.length === onceArray.length) break;
      if ( arrayBuffer.includes(numberOfItem)) continue;
      arrayBuffer.push(numberOfItem);
      let span = document.createElement('span');
      span.style.display = 'inline-block';
      span.style.marginLeft = `${getRandomIntegerNumber(3, 5)}px`;
      span.innerHTML = onceArray[numberOfItem];
      span.style.fontSize = arrayLength[numberOfItem] + 'px';
      span.style.verticalAlign = getRandomIntegerNumber(0, 1) ? 'super': 'sub';
      divContainer.append(span);
    }
  return divContainer;  
  }

const arrayOfSize = creatArrayOfSize(bufferArrayOfAccordance, minFontSize, maxFontSize);
return creatTags(bufferArrayOfAccordance, arrayOfSize);

}