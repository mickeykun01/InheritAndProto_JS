// question 1 ..
// const parent  = {
//     calc() {
//         console.log(`${this.firstname} ${this.lastname} ${this.rollno}`);
//     }
// }

// const child1 = Object.create(parent);
// child1.firstname = "akash";
// child1.lastname = "kumar";
// child1.rollno = "123";

// child1.calc();

// const child2 = Object.create(parent);
// child2.firstname = "mohit";
// child2.lastname = "singh";
// child2.rollno = "879"

// child2.calc();


// question 2

// let chaining={
//     akashkumar:"my full name",
//     age:23,
//     graduation:"BTECH"
// }

// let chain1 = {
//     name:"kshitij",
//     surname:"Thapa",

// }
// let secondChain = {
//     company:"Byjus",
//     work:"telework"
// }

// Chain1.__proto__ = chaining
// console.log(firstChain.graduation);

// question 3

// const AddSum = {
//     // name: "EA16", 
//     add : function(a){
//         let sum = 0;
//         for(let i = 0 ; i < a.length ; i++){
//             sum += a[i];
//         }  
//         console.log(sum);  
//     }
// }

// AddSum.add([1,2,3,4,5]);

// question 4

let animal={
    legs:4,
    moves:'fast',
    crawl:true
}

let obj1={
    pets:"dog,cat,birds",
    living:"in home with us",
    loyal:true
}

let obj2={
    func:function humans(){
        console.log("cruel");
    }
}
console.log(obj1.hasOwnProperty('pets'));

