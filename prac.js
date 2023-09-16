function ageIndays() {
var birthYear = prompt('What year where you born..... Gd friend???');
var ageIndays = (2023 - birthYear) * 365;
console.log('ageIndays')
var h1 = document.createElement('h1');
var textanswer = document.createTextNode('You are' + ageIndays + 'days' )
h1.setAttribute('id','ageIndays')
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageIndays').remove();
}