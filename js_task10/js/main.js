createListOfFonts();

const colorInput = document.querySelector('#color');
colorInput.addEventListener('change', handlerChangeColor);

const fontStyleInput = document.querySelector('#fontStyle');
fontStyleInput.addEventListener('change', handlerChangeFont);

const reloadButton = document.querySelector('.reloadButton');
reloadButton.addEventListener('click', handlerReloadButton);

async function createListOfFonts() {
  try {
    const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyBMt6YskLCW1_1qwiXdiyrIxAJiEUEwNwk');
    const fonts = await response.json();
    fonts.items.sort(( prev, next ) => {
      if ( prev.family < next.family ) return -1;
      if ( prev.family < next.family ) return 1
    });
    createOptionsForSelect(fonts.items)
  } catch(error) {
    alert(`${error}  Check your Internet connection and click on the button for reload fonts`);
  }  
}

function createOptionsForSelect(arrayOfFonts) {
  const fontStyle = document.querySelector('#fontStyle');
  arrayOfFonts.forEach(element => {
    fontStyle.insertAdjacentHTML('beforeend',
      `<option value = "${element.family}">${element.family}</option>`)
  });
}

function addGoogleFontToHTML(url) {
  const link = document.createElement('link');
  link.rel   = 'stylesheet';
  link.href  = url;
  document.head.append(link);
}

function handlerReloadButton(e) {
  createListOfFonts();
  e.target.style.backgroundColor = '#e9a4a4';
  setTimeout(() => {e.target.style.backgroundColor = 'white';}, 500 );
}

function handlerChangeColor() {
  localStorage.setItem('color', getColor() );
  changeColor();
}

function handlerChangeFont() {
  localStorage.setItem('fontFamily', getFontFamily() );
  changeFont();
}
function changeColor() {
  const main = document.querySelector('.main');
  main.style.background = localStorage.getItem('color');
}

function changeFont() {
  const text = document.querySelector('.mainText');
  const fontFamily = localStorage.getItem('fontFamily');
  addGoogleFontToHTML(`https://fonts.googleapis.com/css?family=${fontFamily}`);
  text.style.fontFamily = fontFamily;
}

function getFontFamily() {
  const fontStyle = document.querySelector('#fontStyle');
  return fontStyle.value;
}

function getColor() {
  const inputColor = document.querySelector('#color');
  return inputColor.value;
}

