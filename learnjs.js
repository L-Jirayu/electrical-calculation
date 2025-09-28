// Text Output
console.log("====== text output ======");
console.log("Hello World");


// Variable (num type)
console.log("\n====== variable (num type) ======");
const a = 3;
// a = 3.5; (const error)
let b = 2;
b = 2.5;
console.log(a,"+",b,"=",a+b);
console.log(a,"-",b,"=",a-b);
console.log(a,"*",b,"=",a*b);
console.log(a,"/",b,"=",a/b);

// Variable (str type)
console.log("\n====== variable (str type) ======");
const names = "Jimmy";
const surname = "Zahkov";
console.log("My name is "+names+" "+surname);


// If-Else
console.log("\n====== if-else ======");
const x = 1; //INPUT HERE!!
if(x == 1){
    console.log("White Thresholding\nLight Open");
}
else if(x == 0){
    console.log("Black Thresholding\nClose Open");
}
else{
    console.log("0 and 1 ONLY!");
}


// Switch Case
console.log("\n====== switch case ======");
let y = 1 //INPUT HERE!!
switch(x){
    case 0:
        console.log(false); //bool type
        break;
    case 1:
        console.log(true); //bool type
        break;
    default:
        console.log("0 and 1 ONLY!");
}


// For Loop
console.log("\n====== for loop ======");
for(let i=1; i<11; i++){
    console.log("Number is: ",i);
}


// While Loop
console.log("\n====== while loop ======");
let j = 1;
while(j<11){
    console.log("Number is: ",j);
    j++;
}