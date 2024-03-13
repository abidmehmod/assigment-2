"use strict";
let personName = "";
personName = prompt("what is you name?") || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`hello ${personName},here are you name in:
    lowercase: ${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`);
}
else {
    alert("please fill you name!");
}
