$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/larasr/eclipse2-workspace/ScenicTest/src/test/java/feature/scenic.feature");
formatter.feature({
  "line": 3,
  "name": "Alata de cliente",
  "description": "In Realizar un login \nAs Con usuario valido\nI Alta de cliente",
  "id": "alata-de-cliente",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Acceder exitosamente a la pagina",
  "description": "",
  "id": "alata-de-cliente;acceder-exitosamente-a-la-pagina",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Ingresar a la pagina de scenic",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Ingresar usuario y password valido",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Dar clic en ingresar",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Deberia ir a la pagina de scenic",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Dar clic a cliente",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Seleccionar linea de negocio",
  "keyword": "Then "
});
formatter.match({
  "location": "loginScenic.Ingresar_a_la_pagina_de_scenic()"
});
formatter.result({
  "duration": 10594085214,
  "status": "passed"
});
formatter.match({
  "location": "loginScenic.Ingresar_usuario_y_password_valido()"
});
formatter.result({
  "duration": 251088838,
  "status": "passed"
});
formatter.match({
  "location": "loginScenic.Dar_clic_en_ingresar()"
});
formatter.result({
  "duration": 12122739333,
  "status": "passed"
});
formatter.match({
  "location": "loginScenic.Deberia_ir_a_la_pagina_de_scenic()"
});
formatter.result({
  "duration": 258747133,
  "status": "passed"
});
formatter.match({
  "location": "loginScenic.Dar_clic_a_cliente()"
});
formatter.result({
  "duration": 64465058,
  "status": "passed"
});
formatter.match({
  "location": "loginScenic.Seleccionar_linea_de_negocio()"
});
formatter.result({
  "duration": 9250860550,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027HDFLAPLARASR\u0027, ip: \u002710.173.42.9\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\larasr\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56217}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3a924b82bfa157de1198e9e105f7b8ac\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:316)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:115)\r\n\tat stepDefinitions.loginScenic.Seleccionar_linea_de_negocio(loginScenic.java:72)\r\n\tat ✽.Then Seleccionar linea de negocio(C:/Users/larasr/eclipse2-workspace/ScenicTest/src/test/java/feature/scenic.feature:15)\r\n",
  "status": "failed"
});
});