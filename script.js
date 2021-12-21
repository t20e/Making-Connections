let img = document.getElementById('newImg34')

let imgSelection = (
    ['images/5.jpg',
    'images/d.jpg',
    'images/t.jpg',
    'images/alayne-s.jpg'
   ]
);

let persons = (
    ['tomys genta',
    'darrel concrer',
    'jen fire',
    'Alemt klouner',
    'pat dunkir',
    ]
);
console.log(persons)

let h1 = document.getElementById('h1');


function profileChange(){
    let roll = persons[Math.floor(Math.random() * persons.length)];
    let roll2 = imgSelection[Math.floor(Math.random() * imgSelection.length)];
    h1.innerText = roll;
    img.src = roll2;

}
let addRemove1 = document.getElementById('1');
let other = document.getElementById('2');
let num1 = document.getElementById('num1');

num1New = 2;


function addRemove(){
    addRemove1.remove();
    num1.innerText = num1New - 1;
    return num1New;

}

function addRemove2(){
    other.remove();
    num1.innerText = num1New - 1;
    return num1New;

}