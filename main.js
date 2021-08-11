console.log("main.js is active");

const NAV_ELEMENTS = {
  APPS: document.getElementById("navUser"),
  ALERTS: document.getElementById("navAlerts"),
  SETTINGS: document.getElementById("navSettings"),
}

let currentView = NAV_ELEMENTS.APPS
console.log(document.querySelector("#navUser"))