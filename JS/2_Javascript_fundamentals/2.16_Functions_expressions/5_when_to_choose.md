<!-- When to choose Function Declaration versus Function Expression? -->

As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. 

It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.


But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.

Summary:

>Functions are values. They can be assigned, copied or declared in any place of the code.

>If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.

>If the function is created as a part of an expression, it’s called a “Function Expression”.
Function Declarations are processed before the code block is executed. They are visible everywhere in the block.

>Function Expressions are created when the execution flow reaches them.