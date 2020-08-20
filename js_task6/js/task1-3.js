// ------------task 1-----------
function selectDivChildren1() {
  let elements = document.querySelectorAll('div > div');
  Array.from(elements).forEach( elem => elem.style.backgroundColor = 'red');
}

function selectDivChildren2() {
  let elements = document.getElementsByTagName('div');
  Array.from(elements).forEach( elem => {
    if ( elem.parentElement.localName === 'div' ) elem.style.backgroundColor = 'green';
  });
}


// ------------task 2-----------
function getInputTextValue() {
  console.log( document.querySelector('input[type="text"]').value );
}

// ------------task 3-----------
function setBackgroundBody() {
  console.dir(document.body);
  console.log(document.querySelector('input[type="color"]').value);
    
  document.body.style.backgroundColor = document.querySelector('input[type="color"]').value;
}