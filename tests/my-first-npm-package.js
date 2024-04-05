import { add, divide, printMsg } from '@jaychang99/my-first-npm-package';

console.log(printMsg());

console.log(add(1, 2));


try {
  console.log(divide(6, 0));
} catch (e) {
  console.error(e.message);
}