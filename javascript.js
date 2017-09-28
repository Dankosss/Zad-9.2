var femaleNames = ['Asia', 'Kasia', 'Ania', 'Ilona'];
console.log(femaleNames);
var maleNames = ['Michal', 'Tomek', 'Grzegorz', 'Jarek'];
console.log(maleNames);
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
 	console.log(allNames);
}
