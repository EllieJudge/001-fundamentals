# Coding Tasks

**Note**

Where applicable, try to do the coding tasks with [ping pong pair programming](http://wiki.c2.com/?PairProgrammingPingPongPattern).

For example, in your pairs, person A could do task 2, observe that the test fails because task 3 has not been completed.

Person B then implements the code for task 3.

You then re-run the test and find that it passes.

Then Person B writes the test and code for task 4.

Person A writes the code and implements the function for task 5 and so on and so on.

## 1) Download the ESLint extension for VSCode

We use a tool called a Linter. A linter will identify when we have incorrectly formatted our code, or when it suspects we have an error such as an undefined variable.

We use a tool called [ESLint](https://eslint.org/).

You can run:

    npm run eslint

to see whether ESLint suspects you have made any errors. It is recommended to do this regularly, so you can fix problems as you go along.

Also, **install the ESLint extension for VSCode**, which will provide in-line error checking (by underlining any problems in red squiggly lines, like in a Word document). Click the square symbol on the left hand bar for extensions.

## 2) Enhancing your package.json

Update your package.json and get it to list out files and directories when you run `npm run show-all-files`

You should see something like the following:

```
LICENSE           README.md         app               docs              package-lock.json package.json      test
```

**Hint**

Go back to your command line lecture notes and the command for listing files

## 3) Write the test for a subtract function

Add a new test that will check that the calculator now supports a subtract function.

**Hint**

At this stage the test should FAIL.

## 4) Implement the subtract function

Update your application to implement a new function that will subtract two numbers and return the result.

The test from task 3 should now pass.

## 5) Write a test for a multiply function

Add a new test that will check that the calculator now supports a multiply function.

**Hint**

At this stage the test should FAIL.

## 6) Implement the multiply function

Update your application to implement a new function that will multiply two numbers and return the result.

The test from task 5 should now pass.

## 7) Write a test for an isOdd function

Add a new test that will check that the calculator now supports an isOdd function that will return `true` if the number passed to it is odd, and `false` if the number passed to it is even.

**Hint**

At this stage the test should FAIL.

## 8) Implement the isOdd function

Update your application to implement the isOdd function

The test from task 7 should now pass.

## 9) Write a test for an isEven function

Add a new test that will check that the calculator now supports an isEven function that will return `true` if the number passed to it is even, and `false` if the number passed to it is even.

**Hint**

At this stage the test should FAIL.

## 10) Implement the isEven function

Update your application to implement the isEven function

The test from task 9 should now pass.

## 11) Write a test for an divisibleBy function

Add a new test that will check that the calculator now supports a divisibleBy function which takes two arguments and returns `true` if the first number can be divided evenly by the second.

e.g.

`calculator.divisibleBy(10, 2)` --> `true`
`calculator.divisibleBy(13, 7)` --> `false`

**Hint**

At this stage the test should FAIL.

## 12) Implement the divisibleBy function

Update your application to implement the divisibleBy function.

The test from task 11 should now pass.

## 13) Write a test for a square function

Add a new test that will check that the calculator now supports a square function that returns the square of the number passed to it.

**Hint**

At this stage the test should FAIL.

## 14) Implement the square function

Update your application to implement the square function.

The test from task 13 should now pass.

# Written questions

The following questions are intended to be answered with written answers (no coding required) and should re-enforce some of the learning you have completed.

1. Which part is the file extension of the package.json file?
    - .json

2. What does JSON stand for?
    - javascript object notation

3. What is the purpose of JSON?
    - JSON is a syntax for storing and transferring data.

4. What does the package.json file do?
    - package.json is where all the code or packages needed for your program to run are listed, so npm knows what to install.

5. What are some of the different 'types' that can be represented in JSON?
    a string
    a number
    an object (JSON object)
    an array
    a boolean
    null
