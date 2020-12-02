package com.scenic.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.scenic.config.BaseConfig;

public class LoginPage extends BaseConfig {
	public LoginPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}

	By inputUsuario = By.id("login_usuario");
	By inputContrasena = By.id("login_contrasenya");
	By btnIngresar = By.id("btn_label");
	By imgNameApp = By.xpath("//*[@id=\\\"nombreApp\\\"]/img");

	public void setUserPass() {
		setText(inputUsuario, "N3218862");
		setText(inputContrasena, "N3Gr1T0N0V");
	}

	public void access() {
		click(btnIngresar);
	}
	
	public boolean validateImage() {
		return isDisplayed(imgNameApp);
	}

}
