const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const runButton = document.querySelector('#run');
const cleanButton = document.querySelector('#clean');

runButton.onclick = run;
cleanButton.onclick = clean;

const output = document.querySelector('#output');
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';



function run() {
  let admittedList = [];
  let refusedList = [];

  clean();

  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
      refusedList.push(people[i]); 
    } else {
      admittedList.push(people[i]); 
    } 
  } 

  refused.textContent += refusedList.join(', ') + ".";
  admitted.textContent += admittedList.join(', ') + ".";
}

function clean() {
  admitted.textContent = 'Admit: ';
  refused.textContent = 'Refuse: ';
}
