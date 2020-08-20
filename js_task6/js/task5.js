function moveDiv(t, mDiv, start) {
    t = t + 0.05;
    const radius = 50;
    const centerX = 100;
    const centerY = 100;
    const x = Math.floor(centerX + (radius * Math.cos(t + start)));
    const y = Math.floor(centerY + (radius * Math.sin(t + start)));
    mDiv.style.top = y + 'px';
    mDiv.style.left = x + 'px';
    setTimeout(function () {
        moveDiv(t, mDiv, start);
    }, 10);
}

function animateDivs(elem) {
  elem.disabled = true;
  for (var i = 0; i < 5; i++) {
    const div = document.getElementById('circle' + i);
    moveDiv(1, div, i / 2);
  }
}

function createDivs(elem) {
    elem.disabled = true;
    let container = document.querySelector('.container');
    for (let i = 0; i < 5; i++) {
      const centerX = 100;
      const centerY = 100;
      const radius = 50;
      const x = Math.floor(centerX + (radius * Math.cos(1.05 + i/2)));
      const y = Math.floor(centerY + (radius * Math.sin(1.05 + i/2)));
      const circleDiv = document.createElement('div');
      circleDiv.classList.add('circle');
      circleDiv.id = 'circle' + i;
      circleDiv.style.left = x + 'px';
      circleDiv.style.top = y + 'px';
      container.append(circleDiv);
    }
}
