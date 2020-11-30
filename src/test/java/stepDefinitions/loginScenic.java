package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginScenic {
	
	//@FindBy(id = "lineaNegocioSlct_popup2")
	//WebElement lineaNegocio;
	WebDriver driver;
	
	@Given("Ingresar a la pagina de scenic")
	public void Ingresar_a_la_pagina_de_scenic() {
		System.setProperty("webdriver.chrome.driver", "chromedriver\\chromedrivers.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("http://mxsrvwasmui1t.alico.corp/ClienteUnico/login.jsp");

	}
	
	
	@When("Ingresar usuario y password valido")
	public void Ingresar_usuario_y_password_valido() {
		driver.findElement(By.id("login_usuario")).sendKeys("");
        driver.findElement(By.id("login_contrasenya")).sendKeys(" ");
	}
	
	@Then("Dar clic en ingresar")
	public void Dar_clic_en_ingresar() {
	    driver.findElement(By.xpath("//*[@id=\"btn_label\"]")).click();
	}
	
	@Then("Deberia ir a la pagina de scenic")
	public void Deberia_ir_a_la_pagina_de_scenic() {
		driver.findElement(By.xpath("//*[@id=\"nombreApp\"]/img")).isDisplayed();
	}
	
		
}
