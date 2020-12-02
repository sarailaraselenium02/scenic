package stepDefinitions;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.scenic.pageobjects.LoginPage;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginScenic {

	private WebDriver driver;
	LoginPage loginPage;

	@Before
	public void initialize() {
		loginPage = new LoginPage(driver);
		driver = loginPage.chromeDriverConection();
		loginPage.setWindowMaximize();

	}

	@Given("Ingresar a la pagina de scenic")
	public void ingresar_a_la_pagina_de_scenic() {
		loginPage.setURL("http://mxsrvwasmui1t.alico.corp/ClienteUnico/login.jsp");
	}

	@When("Ingresar usuario y password valido")
	public void Ingresar_usuario_y_password_valido() {
		// driver.findElement(By.id("login_usuario")).sendKeys("N3218862");
		// driver.findElement(By.id("login_contrasenya")).sendKeys("N3Gr1T0N0V");
		loginPage.setUserPass();
	}

	@Then("Dar clic en ingresar")
	public void Dar_clic_en_ingresar() {
		loginPage.access();
	}

	@Then("Deberia ir a la pagina de scenic")
	public void Deberia_ir_a_la_pagina_de_scenic() {
		loginPage.validateImage();
	}
}
