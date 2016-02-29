Reference: https://crossbrowsertesting.com/faq/how-do-i-record-and-run-selenium-tests-selenium-builder

Selenium Builder is a Firefox extension that allows you to record, save and play selenium scripts. CrossBrowserTesting has created a plugin for Selenium Builder which allows you to run these selenium scripts or suites of scripts against any of our Selenium enabled browsers.

#### Installing Selenium Builder

Go to http://seleniumbuilder.github.io/se-builder/ in Firefox and click **Install**:

![](https://crossbrowsertesting.com/images/faq/selenium-howto-1.png)

Go to Manage plugins:

![](https://crossbrowsertesting.com/images/faq/selenium-howto-2.png)

Scroll down, and select Install for the option **CrossBrowserTesting.com for Selenium Builder 1.5**. Selenium Builder will restart and should then look like this:

![](https://crossbrowsertesting.com/images/faq/selenium-howto-3.png)

#### Recording a script

To record a script, enter your URL and select **Selenium 2**:

![](https://crossbrowsertesting.com/images/faq/selenium-howto-4.png)

Now inside the Firefox window with the desired URL you can take actions which the add-on will record:

![](https://crossbrowsertesting.com/images/faq/selenium-howto-5.png)

You can save your scripts locally, and you can create suites, which are lists of scripts to execute in sequence. In order to use these scripts on CrossBrowserTesting.com, make sure to record them as Selenium 2 scripts, not Selenium 1.

#### Running the script on CrossBrowserTesting.com's browsers

To run the script against a browser on CrossBrowserTesting, select Run, Run on CrossBrowserTesting, then select the operating system and browser (**Select config / browser to test**), then press the Run link to begin.

![](https://crossbrowsertesting.com/images/faq/selenium-howto-6.png)

As the script is executed, you will see it progress through commands in the script. You can create a saved list of browsers, and either run individual browsers from this list or run all of them.

To run a suite, a collection of selenium scripts, against a browser at CrossBrowserTesting.com, select the **Run Suite** command and proceed as described above. If you turn on the **Run, Share state across suite** menu item, the entire suite will be executed against a single instance of the browser, i.e. it will not stop and restart a browser between each test in a suite. You will typically want to have this turned on.

#### Using a script to drive the screenshot system

You can save a script to the screenshot system so it is available as an advanced option. This enables you to take screenshots of pages that cannot be directly accessed by a url or need data entry or actions taken to enter a certain state before taking the screenshot. See [this Screenshot FAQ](http://crossbrowsertesting.com/faq/can-i-use-selenium-script-screenshot-system) for more info.
