// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const thoughts = "Hello Thoughts";
var tuple_name: number[] = [];
const fountian = "Hello Fountian";
var fountain_name: number[] = [];
console.log(fountian && thoughts);

let data = DataView;
//I think TS could provide expression
{
  let tuple_fountian: never[] = [];

  console.log(tuple_fountian, data);
  // to compile for internal logs
}

//
var tup = [];
tup[0] = thoughts;
tup[1] = fountian;

console.log(tup[0]);
console.log(tup[1]);

tuple_name[0] = 0;
tuple_name[1] = 1;
console.log(fountain_name, [fountian]);
export { thoughts };
// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
