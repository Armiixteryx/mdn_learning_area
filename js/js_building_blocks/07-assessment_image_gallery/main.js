var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

  const IMG_AMOUNT = 5; 
  for (let i = 0; i < IMG_AMOUNT; i++) {
    const IMG_SRC = 'images/pic' + (i + 1) + '.jpg';

    var newImage = document.createElement('img');
    newImage.setAttribute('src', IMG_SRC);

    newImage.onclick = function(e) {
      setDisplayedImg(e.target.getAttribute('src'));
    }

    thumbBar.appendChild(newImage);
  }


/* Event handler for images */

function setDisplayedImg(newSrc) {
  displayedImage.setAttribute('src', newSrc);
}


/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  var state = btn.getAttribute('class');

  if (state === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}
