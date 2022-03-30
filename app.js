

let text     = "My name is Joy Sarker. I love JS";

let pattern  = /Is|joy|love|i/i;



console.log(pattern.test(text));

let taxt      = "plz Choose java or php";
let pattern2  = /(plz|please) (choose|like) (php|java)/i;

console.log(pattern2.test(taxt));


let tex     ="I love you";
let pattarn =/(I|ami) (love|tumake) (you|valobasi)/i;
console.log(pattarn.test(tex));

//number pattern

// let number     ="+8801305851156";
//number pattern
let pattarn3 =/^[01|8801|\+8801][0-9]{9}$/;

let txt      ="joysarker2927@gamil.com";

// joysarker2929@gamil.com
// E-mail pattern
let email =/^[a-z0-9\._]*@[a-z0-9]*\.[a-z]{2,5}$/;
// let pattarn3 =/^a[a-zA-Z0-9]*z$/; star is help everything freedom.

// let pattarn4 =/^a[^a-z]*z$/; // ^ skiping 

console.log(email.test(txt));


let zip        = "3309999999";
let zippattern =/^[0-9][^a-zA-Z]{3}/;

console.log(zippattern.test(zip));


let indiaph   = 39966669;
let indiaphN  =/^[\+91|0-9]{8}$/;
console.log(indiaphN.test(indiaph));


// abc2_343@gmail.com


let gmail         ="abc2_34@gmail.com";
let gmailpattern  =/^[a-z0-9\._-]*@[a-zA-Z]*\.[a-z]{2,5}$/;

console.log(gmailpattern.test(gmail));



let g_mail = "devjoysarker@gmail.com"

let g_mailpattarn =/^[a-zA-Z0-9\._-]*@[a-z0-9]*\.[a-z]{2,5}$/;

console.log(g_mailpattarn.test(g_mail));




