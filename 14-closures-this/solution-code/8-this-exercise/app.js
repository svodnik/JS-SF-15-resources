/*

1. Predict the results of the code below, but without running it in the browser.
  - What is logged by the first console.log statement? Why?
  - What is logged by the second console.log statement? Why?

  ANSWER:
    First `console.log()`: Aurelio de Rosa
    Second `console.log()`: John Doe

2. Run the code, check the results against your predictions. If the results were different, explain why.

  EXPLANATION:
    Context of a function is dependent on how a function is invoked, not how it's defined. For the first log, we execute `obj.prop.getFullName()` invoking `.getFullName()` upon the `prop` object, thereby setting the context of the function to `prop` and logging `prop`'s `fullName` property, `Aurelio De Rosa`. 
    For the second log, `.getFullName()` is set to the variable `test` which is in declared in the context of the `window` object, similar to the first example we saw earlier. Hence, when `test` is called, the log returns the value of the `fullName` property of the `window` object, `John Doe`.

*/

var fullName = 'John Doe';
var obj = {
   fullName: 'Colin Ihrig',
   prop: {
      fullName: 'Aurelio De Rosa',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(obj.prop.getFullName());

var test = obj.prop.getFullName;

console.log(test());


