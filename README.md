## Summary
This repository contains deliverables for Backbase's test exercise. 
The test approach and test plan are available in 'docs' folder. 
Issues observed during exploratory testing are available in 'Issues' sheet of the test plan. 
The regression tests are automated using Nightwatch (see https://nightwatchjs.org/) and will run on Chrome.

## Instructions to run automated tests:
	1. Pre-requisities: 
		a. Java (JRE), Node.js and NPM are installed
		b. JAVA_HOME is set
		c. Test application available at http://computer-database.herokuapp.com/computers
	2. Download or clone project folder
	3. Open cmd window and navigate to project folder
	4. Do the following npm installations locally
		a. npm install nightwatch
		b. npm install chromedriver
		c. npm install geckodriver
		d. npm install selenium-server
	5. Create 'lib' folder under project folder
	6. Copy chromedriver.exe from '/node_modules/chromedriver/lib/chromedriver' to 'lib' folder
	7. Copy selenium-server-standalone-3.141.59.jar from '/node_modules/selenium-server/lib/runner' to 'lib' folder
	8. To run tests use the following command  "nightwatch -t tests/computerDatabaseTests.spec.js -e chrome"
