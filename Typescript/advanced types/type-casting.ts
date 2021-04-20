/**
 * userInputElement = <input id="user-input" />
 */

// valtozo as number - TS
// (number) valtozo - C#
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hello World!";
}
