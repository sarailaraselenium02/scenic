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
formatter.before({
  "duration": 6116446578,
  "status": "passed"
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
  "location": "LoginScenic.ingresar_a_la_pagina_de_scenic()"
});
formatter.result({
  "duration": 7950272062,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenic.Ingresar_usuario_y_password_valido()"
});
formatter.result({
  "duration": 317735567,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenic.Dar_clic_en_ingresar()"
});
formatter.result({
  "duration": 15194444159,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenic.Deberia_ir_a_la_pagina_de_scenic()"
});
formatter.result({
  "duration": 231778351,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepDefinitions.LoginScenic.Deberia_ir_a_la_pagina_de_scenic(LoginScenic.java:50)\r\n\tat ✽.Then Deberia ir a la pagina de scenic(C:/Users/larasr/eclipse2-workspace/ScenicTest/src/test/java/feature/scenic.feature:13)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});