package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import com.scenic.pageobjects.LoginPage;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class AltaCliente {
	
	/*private WebDriver driver;
	LoginPage loginPage;

	@Before
	public void initialize() {
		loginPage = new LoginPage(driver);
		driver = loginPage.chromeDriverConection();
		loginPage.setWindowMaximize();

	}

	@Then("Dar clic a cliente")
	public void Dar_clic_a_cliente() {
		driver.findElement(By.id("btn_crearCte")).click();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@Then("Seleccionar linea de negocio")
	public void Seleccionar_linea_de_negocio() {
		try {
			driver.findElement(By.xpath("//*[@id=\"widget_lineaNegocioSlct\"]/div[1]/input")).click();
			System.out.println("//*[@id=\\\"widget_lineaNegocioSlct\\\"]/div[1]/input");
		} catch (Exception e) {
			System.out.println("No //*[@id=\\\"widget_lineaNegocioSlct\\\"]/div[1]/input");
		}

		try {
			driver.findElement(By.xpath("//*[@id=\"widget_lineaNegocioSlct\"]")).click();
			System.out.println("//*[@id=\\\"widget_lineaNegocioSlct\\\"]");
		} catch (Exception e) {
			System.out.println("No //*[@id=\\\"widget_lineaNegocioSlct\\\"]");
		}
		driver.findElement(By.id("lineaNegocioSlct")).sendKeys("INDIVIDUAL PRIVADO");
		driver.findElement(By.id("lineaNegocioSlct")).sendKeys(Keys.ENTER);

		try {
			driver.findElement(By.xpath("//*[@id=\\\"widget_ramoSlct\\\"]/div[1]/input")).click();
			System.out.println("//*[@id=\\\"widget_ramoSlct\\\"]/div[1]/input");
		} catch (Exception e) {
			System.out.println("No //*[@id=\\\"widget_ramoSlct\\\"]/div[1]/input");
		}

		try {
			driver.findElement(By.xpath("//*[@id=\\\"widget_ramoSlct\\\"]")).click();
			System.out.println("//*[@id=\\\"widget_ramoSlct\\\"]");
		} catch (Exception e) {
			System.out.println("No //*[@id=\\\"widget_ramoSlct\\\"]");
		}
		driver.findElement(By.id("ramoSlct")).sendKeys("VIDA");

		try {
			driver.findElement(By.xpath("//*[@id=\"widget_lineaNegocioSlct\"]/div[1]/input")).click();
			System.out.println("//*[@id=\\\"widget_lineaNegocioSlct\\\"]/div[1]/input");
		} catch (Exception e) {
			System.out.println("No //*[@id=\\\"widget_lineaNegocioSlct\\\"]/div[1]/input");
		}

	}*/
}
