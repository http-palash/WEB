Debugging in the browser


Debugging is the process of finding and fixing errors within a script. All modern browsers and most other environments support debugging tools – a special UI in developer tools that makes debugging much easier. It also allows to trace the code step by step to see what exactly is going on.

The “Sources” panel
Select the Sources panel.

The Sources panel has 3 parts:

1.The File Navigator pane lists HTML, JavaScript, CSS and other files, including images that are attached to the page. Chrome extensions may appear here too.

2.The Code Editor pane shows the source code.

3.The JavaScript Debugging pane is for debugging, we’ll explore it soon.



Console

If we press Esc, then a console opens below. We can type commands there and press Enter to execute.

After a statement is executed, its result is shown below.

For example, here 1+2 results in 3, while the function call hello("debugger") returns nothing, so the result is undefined:

Breakpoints

Let’s examine what’s going on within the code of the example page. In  example.js, click at line number 4. Yes, right on the 4 digit, not on the code.

You’ve set a breakpoint. Please also click on the number for line 8.

It should look like this (blue is where you should click):

A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution.

While the code is paused, we can examine current variables, execute commands in the console etc. In other words, we can debug it.

We can always find a list of breakpoints in the right panel. That’s useful when we have many breakpoints in various files. It allows us to:

Quickly jump to the breakpoint in the code (by clicking on it in the right panel).
Temporarily disable the breakpoint by unchecking it.
Remove the breakpoint by right-clicking and selecting Remove.

Conditional breakpoints
Right click on the line number allows to create a conditional breakpoint. It only triggers when the given expression, that you should provide when you create it, is truthy.

That’s handy when we need to stop only for a certain variable value or for certain function parameters.


The command “debugger”

We can also pause the code by using the debugger command in it, like this:

function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
}

Such command works only when the development tools are open, otherwise the browser ignores it.

Pause and look around

In our example, hello() is called during the page load, so the easiest way to activate the debugger (after we’ve set the breakpoints) is to reload the page. So let’s press F5 (Windows, Linux) 

Please open the informational dropdowns to the right (labeled with arrows). They allow you to examine the current code state:

Watch – shows current values for any expressions.

You can click the plus + and input an expression. The debugger will show its value, automatically recalculating it in the process of execution.

Call Stack – shows the nested calls chain.

At the current moment the debugger is inside hello() call, called by a script in index.html (no function there, so it’s called “anonymous”).

If you click on a stack item (e.g. “anonymous”), the debugger jumps to the corresponding code, and all its variables can be examined as well.

Scope – current variables.

Local shows local function variables. You can also see their values highlighted right over the source.

Global has global variables (out of any functions).

There’s also this keyword there that we didn’t ]


Tracing the execution
Now it’s time to trace the script.

There are buttons for it at the top of the right panel. Let’s engage them.

 – “Resume”: continue the execution, hotkey F8.
Resumes the execution. If there are no additional breakpoints, then the execution just continues and the debugger loses control.


The execution has resumed, reached another breakpoint inside say() and paused there. Take a look at the “Call Stack” at the right. It has increased by one more call. We’re inside say() now.

 – “Step”: run the next command, hotkey F9.
Run the next statement. If we click it now, alert will be shown.

Clicking this again and again will step through all script statements one by one.

 – “Step over”: run the next command, but don’t go into a function, hotkey F10.
Similar to the previous “Step” command, but behaves differently if the next statement is a function call (not a built-in, like alert, but a function of our own).

If we compare them, the “Step” command goes into a nested function call and pauses the execution at its first line, while “Step over” executes the nested function call invisibly to us, skipping the function internals.

The execution is then paused immediately after that function call.

That’s good if we’re not interested to see what happens inside the function call.

 – “Step into”, hotkey F11.
That’s similar to “Step”, but behaves differently in case of asynchronous function calls. If you’re only starting to learn JavaScript, then you can ignore the difference, as we don’t have asynchronous calls yet.

For the future, just note that “Step” command ignores async actions, such as setTimeout (scheduled function call), that execute later. The “Step into” goes into their code, waiting for them if necessary. See DevTools manual for more details.

 – “Step out”: continue the execution till the end of the current function, hotkey Shift+F11.
Continue the execution and stop it at the very last line of the current function. That’s handy when we accidentally entered a nested call using , but it does not interest us, and we want to continue to its end as soon as possible.

 – enable/disable all breakpoints.
That button does not move the execution. Just a mass on/off for breakpoints.

 – enable/disable automatic pause in case of an error.
When enabled, if the developer tools is open, an error during the script execution automatically pauses it. Then we can analyze variables in the debugger to see what went wrong. So if our script dies with an error, we can open debugger, enable this option and reload the page to see where it dies and what’s the context at that moment.



Logging

To output something to console from our code, there’s console.log function.

For instance, this outputs values from 0 to 4 to console:

// open console to see
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}

Regular users don’t see that output, it is in the console. To see it, either open the Console panel of developer tools or press Esc while in another panel: that opens the console at the bottom.

Summary
As we can see, there are three main ways to pause a script:

A breakpoint.
The debugger statements.
An error (if dev tools are open and the button  is “on”).
When paused, we can debug: examine variables and trace the code to see where the execution goes wrong.

There are many more options in developer tools than covered here. The full manual is at https://developers.google.com/web/tools/chrome-devtools.