"use strict";
/**
 * userInputElement = <input id="user-input" />
 */
// valtozo as number - TS
// (number) valtozo - C#
var userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hello World!";
}
