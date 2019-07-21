const output = document.querySelector('.output');
output.innerHTML = "";

const runButton = document.querySelector('#run');
runButton.onclick = runCountdown;

const deleteButton = document.querySelector('#delete');
deleteButton.onclick = deleteCountdown;

function runCountdown() {
  let i = 10;

  while (i >= 0) {
    const para = document.createElement('p');

    if (i == 10) {
      para.textContent = 'Countdown 10';
    } else if (i == 0) {
      para.textContent = 'Blast off!';
    } else {
      para.textContent = i;
    }

    output.appendChild(para);

    i--;
  }
}

function deleteCountdown() {
  output.innerHTML = "";
}
