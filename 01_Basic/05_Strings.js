const name = "Prakhar"
const repocount = 50
const faith = "I know what youre trying to say"
console.log(name + repocount);

console.log(`My name is ${name} and my repocount is
 ${repocount}`);

 const gameName = new String(`${name} is a good boy ${faith}`)

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2))
 console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-8,4);
 console.log(anotherString);

 const newStringOne = "  prakhar  "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://prakhar.com/prakhar%90srivastav"
console.log(url.replace('%90', '-')); 

console.log(url.includes('Prakhar')); 

console.log(gameName.split('-'));

 