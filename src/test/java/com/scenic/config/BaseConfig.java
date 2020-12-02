package com.scenic.config;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseConfig {
	private WebDriver driver;

	public BaseConfig(WebDriver driver) {
		this.driver = driver;
	}

	public WebDriver chromeDriverConection() {
		System.setProperty("webdriver.chrome.driver", "chromedriver\\chromedrivers.exe");
		driver = new ChromeDriver();
		return driver;
	}

	public void setText(By locator, String text) {
		driver.findElement(locator).sendKeys(text);
	}

	public void click(By locator) {
		driver.findElement(locator).click();
	}

	public boolean isDisplayed(By locator) {
		try {
			return driver.findElement(locator).isDisplayed();
		} catch (org.openqa.selenium.NoSuchElementException e) {
			return false;
		}
	}

	public void setURL(String url) {
		driver.get(url);
	}

	public void setTime(int time) {
		driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
	}

	public void setWindowMaximize() {
		driver.manage().window().maximize();
	}
}
