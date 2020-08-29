const imgCollection = document.querySelectorAll('.container img');
const quantityImg = imgCollection.length;
let currentImg = 0;
imgCollection[0].style.display = 'block';
const buttonIncrement = document.getElementById('increment');
const buttonDecrement = document.getElementById('decrement');

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);

function increment(e) {
  imgCollection[currentImg].style.display = 'none';
  currentImg = ( currentImg === quantityImg - 1 ) ? 0 : ++currentImg;
  imgCollection[currentImg].style.display = 'block';
}

function decrement(e) {
  imgCollection[currentImg].style.display = 'none';
  currentImg = ( currentImg === 0 ) ? quantityImg - 1 : --currentImg;
  imgCollection[currentImg].style.display = 'block';
}