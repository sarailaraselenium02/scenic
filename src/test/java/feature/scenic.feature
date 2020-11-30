
@tag
Feature: Alata de cliente
  In Realizar un login 
  As Con usuario valido
  I Alta de cliente

  @tag1
  Scenario: Acceder exitosamente a la pagina
    Given Ingresar a la pagina de scenic
    When Ingresar usuario y password valido
    Then Dar clic en ingresar 
    Then Deberia ir a la pagina de scenic
    Then Dar clic a cliente
    Then Seleccionar linea de negocio
    
 