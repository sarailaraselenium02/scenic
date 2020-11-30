package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\larasr\\eclipse2-workspace\\ScenicTest\\src\\test\\java\\feature\\scenic.feature",
		glue= {"stepDefinitions"},
		plugin= {"pretty","html:test-output"}
)
public class TestRunner {

}
