const inputTextColor = document.querySelector('#textColor');
const inputBackgroundColor = document.querySelector('#backgroundColor');
const targetTextarea = document.querySelector('#targetTextarea');

targetTextarea.style.color = inputTextColor.value;
targetTextarea.style.backgroundColor = inputBackgroundColor.value;

inputTextColor.addEventListener('change', () => { 
    targetTextarea.style.color = inputTextColor.value;
 });
inputBackgroundColor.addEventListener('change', () => { 
    targetTextarea.style.backgroundColor = inputBackgroundColor.value;
});
