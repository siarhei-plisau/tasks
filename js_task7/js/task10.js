function createButton(name, handler) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.setAttribute('type', 'button');
    button.innerHTML = name;
    const input = document.querySelector('.input-user');
    input.after(button);
    button.addEventListener("click", handler);
}

function addItem() {
    const input = document.querySelector('.input-user');
    if ( input.value === '' ) { console.log('error');return;}
    else {
        console.log('add norm');
        const newLi = document.createElement('li');
        newLi.innerHTML = `<input type="checkbox"><label></label>`;
        const ul = document.querySelector('.list-user');
        ul.append(newLi);
        const allLabel = document.querySelectorAll('label');
        allLabel[allLabel.length-1].textContent = input.value;
        input.value = '';
    }
}

function removeItem() {
    const allInput = document.querySelectorAll('input[type=checkbox]');
    allInput.forEach(element => {
    if ( element.checked ) element.parentElement.remove();
    });
}

function showHiden() {
    const allLi = document.querySelectorAll('li');
    allLi.forEach(element => {
        console.dir(element);
    if ( element.hidden ) {
        element.firstElementChild.checked = false;
        element.removeAttribute('hidden');
    }
    });
}

function hideSelected() {
    const allInput = document.querySelectorAll('input[type=checkbox]');
    allInput.forEach(element => {
        if ( element.checked ) element.parentElement.hidden = 'true';
    });
}

function createForm() {
    const myForm = document.createElement('form');
    myForm.classList.add('form-user');
    document.body.prepend(myForm);
    const myP = document.createElement('p');
    myP.innerHTML = 'Don\'t foget to do:';
    const form = document.querySelector('.form-user');
    form.prepend(myP);
    const myUl = document.createElement('ul');
    myUl.classList.add('list-user');
    form.append(myUl);
    const myInput = document.createElement('input');
    myInput.classList.add('input-user');
    myInput.setAttribute('type', 'text');
    myInput.setAttribute('placeholder', 'New item here');
    form.append(myInput);
}
createForm();
createButton('Show hidden', showHiden);
createButton('Hide selected', hideSelected);
createButton('Remove selected', removeItem);
createButton('add', addItem);


