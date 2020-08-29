const mainList = document.querySelector('.mainList');
const childrenMainList = document.querySelectorAll('.mainList>li ul');
Array.from(childrenMainList).forEach( item => item.hidden = true);

mainList.addEventListener("click", handlerClick);

function handlerClick(event) {
  const target = event.target;
  Array.from(target.children).forEach( item => item.hidden = !item.hidden);
}
