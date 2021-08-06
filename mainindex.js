/*
step 1: JS-Context - variable:letVariable defined in let -did not initialize it to any value;
        JS-Context - variable:constVaribale defined in const -did not initialize it to any value;
        JS-Context - variable:varVariable defined in var -initialize it to undefined;
        JS-Context - variable:addFuncExpr defined in const -did not initialize it to any value;
        JS-Context - variable:addFuncExpr1 defined in var -initialize it to undefined;
        JS-Context - addNormalFunc is defined as a function
*/
console.log("Outside the functions before declaration:");
//step 2: JS-Context - letVariable --> the value is not initialized but variable is declared in the step1.so it throws not initialized error and next step will not be processed;
//console.log("letvariable value : "+letVariable);
//step 3: JS-Context - constVariable --> the value is not initialized but variable is declared in the step1.so it throws not initialized error and next step will not be processed;
//console.log("constvariable value : "+constVariable);
console.log("unintialized error on accessing letVariable and constVariable");
//step 4: JS-Context - varVariable --> the value is initialized to undefined,so it displays undefined;
console.log("varVariable value : "+varVariable);

let mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>constVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
document.getElementById("outside-b4-declaration").innerHTML = mytable;
//step 5: JS-Context - letVariable -->initialized to 1;
let letVariable=1;
//step 6: JS-Context - constVariable -->initialized to 1;
const constVariable=1;
//step 7: JS-Context - varVariable -->updated from undefined to 1;
var varVariable=1;
function function1()
{
    /*let and const has block scope;var has function scope.Variables varVariable,letVariable and constVariable are ignored;new declarations of variables...
    step 1: JS-Context - variable:letVariable defined in let -did not initialize it to any value;
    JS-Context - variable:constVaribale defined in const -did not initialize it to any value;
    JS-Context - variable:varVariable defined in var -initialize it to undefined;
    */
    console.log("**************** function 1 ****************");
    console.log("Before a block,inside a function before declaration:");
    //step 2: JS-Context - letVariable --> the value is not initialized but the variable is declared in step1 of a function call.so it throws not initialized error and next step will not be processed;
    //console.log("letvariable value : "+letVariable);
    //step 3: JS-Context - constVariable --> the value is not initialized but the variable is declared in step1 of a function call.so it throws not initialized error and next step will not be processed;
    //console.log("constvariable value : "+constVariable);
    console.log("unintialized error on accessing letVariable and constVariable");
    //step 4: JS-Context - varVariable --> the value is initialized to undefined,so it displays undefined;
    console.log("varVariable value  : "+varVariable);
    mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>constVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
    document.getElementById("insidefn1-b4-declaration").innerHTML = mytable;
    //step 5: JS-Context - letVariable -->initialized to 2;
    let letVariable=2;
    //step 6: JS-Context - constVariable -->initialized to 2;
    const constVariable=2;
    //step 7: JS-Context - varVariable -->updated from undefined to 2;
    var varVariable=2;
    console.log("Before a block,outside a function after declaration:");
    //step 8: JS-Context - letVariable -->2;
    console.log("letvariable value : "+letVariable);
    //step 9: JS-Context - constVariable -->2;
    console.log("constvariable value : "+constVariable);
    //step 10: JS-Context - varVariable -->2;
    console.log("varVariable value : "+varVariable);
    mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>"+letVariable+"</td></tr><tr><td>constVariable</td><td>"+constVariable+"</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
    document.getElementById("insidefn1-after-declaration").innerHTML = mytable;
    if(letVariable===2)
        {   /*let and const has block scope;Outside declarations of variables letVariable,constVariable and varVariable are ignored;New decclaration of variables...
            step 1: JS-Context - variable:letVariable defined in let -did not initialize it to any value;
            JS-Context - variable:constVaribale defined in const -did not initialize it to any value;
            */
            console.log("Inside of a block of a function before declaration:");
            //step 2: JS-Context - letVariable --> the value is not initialized but the variable is declared step1 inside the if block.so it throws not initialized error and next step will not be processed;
            //console.log("letvariable value : "+letVariable);
            //step 2: JS-Context - constVariable --> the value is not initialized but the variable is declared step1 inside the if block.so it throws not initialized error and next step will not be processed;
            //console.log("constvariable value : "+constVariable);
            console.log("unintialized error on accessing letVariable and constVariable");
            //step 3: JS-Context - varVariable -->2;
            console.log("varVariable value  : "+varVariable);
            mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>constVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
            document.getElementById("insidefn1-insideblock-b4-declaration").innerHTML = mytable;
            //step 4: JS-Context - letVariable -->initialized to 3;
            let letVariable=3;
            //step 5: JS-Context - constVariable -->initialized to 3;
            const constVariable=3;
            //variable declaration moved to step1 in a call() function;the value is updated from 2 to 3;
            var varVariable=3;
            console.log("Inside of a block of a function:");
            //step 6: JS-Context - letVariable -->3;
            console.log("letvariable value : "+letVariable);
            //step 7: JS-Context - constVariable -->3;
            console.log("constvariable value : "+constVariable);
            //step 8: JS-Context - varVariable -->3;
            console.log("varVariable value  : "+varVariable);
            mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>"+letVariable+"</td></tr><tr><td>constVariable</td><td>"+constVariable+"</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
            document.getElementById("insidefn1-insideblock-after-declaration").innerHTML = mytable;
        }
        /*let,const has a block scope; so the scope of the variable declared inside dies;*/
        console.log("Outside of/After a block,but inside a function:");
        //step 9: JS-Context - letVariable -->2;
        console.log("letvariable value : "+letVariable);
        //step 10: JS-Context - constVariable -->2;
        console.log("constvariable value : "+constVariable);
        //step 11: JS-Context - varVariable -->3;updated the value inside the if block as part of the step 66.
        console.log("varVariable value : "+varVariable);
        mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>"+letVariable+"</td></tr><tr><td>constVariable</td><td>"+constVariable+"</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
        document.getElementById("outsidefn1-outsideblock-after-declaration").innerHTML = mytable;
}
function1();
function2();
function function2()
{
    /*var has function scope.Outside variable varVariable is ignored.
    step 1:varVariable declared inside if block moved to top of the function
    JS-Context - variable:varVariable defined in var -initialize it to undefined;
    */
    console.log("**************** function 2 ****************");
    console.log("Before a block,inside a function:");
    //step 2: JS-Context - letVariable declared outside function is accessed -->1;
    console.log("letvariable value : "+letVariable);
    //step 3: JS-Context - constVariable declared outside function is accessed -->1;
    console.log("constvariable value : "+constVariable);
    //step 4: JS-Context - varVariable -->undefined( initialized in the  step:1 of call1 function)
    console.log("varVariable value : "+varVariable);
    mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>"+letVariable+"</td></tr><tr><td>constVariable</td><td>"+constVariable+"</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
    document.getElementById("insidefn2-b4-block").innerHTML = mytable;
    if(letVariable===1)
        {   /*let and const has block scope;Outside variables  letVariables and constVariables are ignored;new declaration of variables...
            step 1: JS-Context - variable:letVariable defined in let -did not initialize it to any value;
            JS-Context - variable:constVariable defined in const -did not initialize it to any value;
            */
            console.log("Inside of a block of a function before declaration:");
            //step 2: JS-Context - letVariable --> the value is not initialized but variable is declared in step1 inside the if block.so it throws not initialized error and next step will not be processed;
            //console.log("letvariable value : "+letVariable);
            //step 2: JS-Context - constVariable --> the value is not initialized but variable is declared in step1 inside the if block.so it throws not initialized error and next step will not be processed;
            //console.log("constvariable value : "+constVariable);
            console.log("unintialized error on accessing letVariable and constVaraible");
            //step 3: JS-Context - varVariable -->undefined (initialized in the step:1 inside the function call1);
            console.log("varVariable value  : "+varVariable);
            mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>constVariable</td><td>Not initialized error.Next step will not processed</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
            document.getElementById("insidefn2-insideblock-b4-decalaration").innerHTML = mytable;
            //step 4: JS-Context - letVariable -->initialized to 3;
            let letVariable=3;
            //step 5: JS-Context - constVariable -->initialized to 3;
            const constVariable=3;
            //variable declaration moved to step1 in a call() function;the value is updated from undefined to 3;
            var varVariable=3;
            console.log("Inside of a block of a function:");
            //step 6: JS-Context - letVariable -->3;
            console.log("letvariable value : "+letVariable);
            //step 7: JS-Context - constVariable -->3;
            console.log("constvariable value : "+constVariable);
            //step 8: JS-Context - varVariable -->3;
            console.log("varVariable value  : "+varVariable);
            mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>"+letVariable+"</td></tr><tr><td>constVariable</td><td>"+constVariable+"</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
            document.getElementById("insidefn2-insideblock-after-declaration").innerHTML = mytable;
        }
        /*let,const has a block scope; so the scope of the variable declared inside dies;*/
        console.log("Outside of/After a block,but inside a function:");
        //step 9: JS-Context - letVariable -->1;
        console.log("letvariable value : "+letVariable);
        //step 10: JS-Context - constVariable -->1;
        console.log("constvariable value : "+constVariable);
        //step 11: JS-Context - varVariable -->3;updated the value inside the if block as part of the step 119.
        console.log("varVariable value : "+varVariable);
        mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>"+letVariable+"</td></tr><tr><td>constVariable</td><td>"+constVariable+"</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
        document.getElementById("outsidefn2-outsideblock-after-declaration").innerHTML = mytable;
}


/*let,const has a block scope;var has a function scope; so all variables declared inside the function dies;*/
console.log("Outside of the functions after declaration:");
    //step 11: JS-Context - letVariable -->1;
console.log("letvariable value : "+letVariable);
    //step 12: JS-Context - constVariable -->1;
console.log("constvariable value : "+constVariable);
    //step 13: JS-Context - varVariable -->1;
console.log("varVariable value : "+varVariable);
mytable = "<table><th>variableNames</th><th>values</th><tr><td>letVariable</td><td>"+letVariable+"</td></tr><tr><td>constVariable</td><td>"+constVariable+"</td></tr><tr><td>varVariable</td><td>"+varVariable+"</td></tr></table>";
        document.getElementById("outsidefns-outsideblock-after-declaration").innerHTML = mytable;
console.log("Hosting in functions and Dead Zone ")
//Because of the hosting, the function decalred and defined at the start,though it is defined after the call
console.log(addNormalFunc(2,3));//5
//JS-Context - addFuncExpr --> the value is not initialized but variable is declared in step1.so it throws not initialized error and next step will not be processed;
//console.log(addFuncExpr(2,3)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization
//JS-Context - addFuncExpr --> the value is not initialized but variable is declared in step1 .so it throws not initialized error and next step will not be processed;
//console.log(addFuncArrow(2,3)) //Uncaught ReferenceError: Cannot access 'addArrow' before initialization
//defined at step1
function addNormalFunc(a,b){
            return a + b;
        }
//JS-Context - addFuncExpr --> initialize as a function
const addFuncExpr = function (a,b) {
    return a+b;
} 
//JS-Context - addFuncExpr -->perform the functionality defined in the function and returns the value;
console.log(addFuncExpr(2,3));
//JS-Context - addFuncArrow -->initialize as a function
const addFuncArrow = (a,b) => a + b;
//JS-Context - addFuncExpr -->perform the functionality defined in the function and returns the value;
console.log(addFuncArrow(2,3));
//JS-Context - addFuncExpr1 -->undefined(initialized in step1)
console.log(addFuncExpr1);
//JS-Context - addFuncExpr1 -->undefined(initialized in step1). so it will throw error stating it is not a function
//console.log(addFuncExpr1(2,3)); //Uncaught TypeError: addExpr1 is not a function (set to undefined - undefined(2,3))
//JS-Context - addFuncExpr1 -->updated as a function 
var addFuncExpr1 =  function (a,b) {
            return a + b;
        };
//JS-Context - addFuncExpr1 -->perform the functionality defined in the function and returns the value;
console.log(addFuncExpr1(2,3));
console.log("*********************************************************");