
/*document.querySelector('h1').style.color='blue';
document.write('<h1>halima</h1>');
window.alert('worning');
console.log('hi %cconsole','color:red');
console.error('error');
console.table(['halai','kdd','ksjs']);
var name='halima';
console.log(`my name is ${name}`);
console.log("hello "+name);
console.log("Alan Peter".length);
console.group("Group 2");
console.log(typeof"Message One");
console.log("Message Two");
console.groupEnd();
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
 console.log(someVar) ;
}
myFun();
//=======================================
// objects
function checkProperty() {
    let exampleObj = {};
    exampleObj.height = 100;
    exampleObj.width = 100;
    // Checking for existing property
    result1 = exampleObj.hasOwnProperty("height");
    // Checking for non-existing property
    result2 = exampleObj.hasOwnProperty("breadth");

    document.querySelector(".outputProperty").textContent//j'ai pas compris
                = result1;
    document.querySelector(".outputNonProperty").textContent
                = result2;
}
//how we can write the value of prompt in our page html
var namej=prompt('entrws le nome');
Document.write(namej);
//la diferrence entre innerHtml,textCentent,innertext lookopera


//understand recursive functions
function multiply(arr, n) {
    if (n <= 0) {
    return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}


function sum(arr, n) {
    if(n <= 0) {
    return 0;
    } else {
    return sum(arr, n - 1) + arr[n - 1];
    }
}

//countdown functions

function countdown(n) {
    if (n < 1) {
    return [];
    } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
    }
}

// methode 2 splice look opera
function countdown(n) {
    if (n < 1) {
    return [];
    } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
    }
}

//methode 3 concat look opera
function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}
//methode 4 
function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
 }


var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};
console.log(gimli)


var arr="halima elhagouchi";

k=arr.split(' ');
console.log(k);
f=k.join(' ');
console.log(f);

const person={

firstname:'halima',
lastname:'elhagouchi',
get fullname(){
    return `$(person.firstname) $(person.lastname)`;
},
set fullname(value){
const k=value.split(' ');
this.firstname=k[0];
this.lastname=k[1];
return k;
},

}
person.fullname='sameh mohamed';
console.log(person);

//cloning an object
const another={};

for(var key in person){
    another[key]=person[key];
}
//or 
const another=Object.assign({},person);
//or2
const another={...person};
console.log(another);

const person1={

    firstname:'halima',
    lastname:'elhagouchi',
    birthyear:2001,
    calcAge :function(){

        const year=new Date().getFullYear();
        const yearsOld=year-this.birthyear;
        this.age=yearsOld;
            return yearsOld;
        }
}

console.log(person1.calcAge());
//reduce
const numbers=[1,3,5,7];

const k=numbers.reduce(
    (accumulator,currentValue)=>accumulator+currentValue 
    );
console.log(k);
//we use alwyse id to do getIlement



var myDiv=document.getElementById('o')
;

function countdown(){
console.log("hi")
if(myDiv.textContent <= 0){
    clearTimeout(mytime);

myDiv.textContent='done..';
}else{
    myDiv.textContent=myDiv.textContent-1;
}


}
var mytime=setInterval(countdown,1000);*/


//la diference entre wettimeout et clearTimeout
//open

/*
document.getElementById('clik').onclick=function(){

window.open("url","atribute _self or blank","specification html","treu or false history");

}


//==========================VIDEO1 dom====================================


var myP=document.createElement('p'),
    myPtext=document.createTextNode('hi thiss my first dom');

myP.document.appendChild(myPtext);
document.body.appendChild(myP);    
//=================VIDEO2 DOM====================*/

var  element=document.getElementsByClassName('p') ;

element[0].innerHTML='hiiiiiiiiiiii';
//===============================================================================================



