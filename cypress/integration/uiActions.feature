Feature: Automate UI Actions

    Background:
        Given I go to "https://rahulshettyacademy.com/AutomationPractice/"

    Scenario: Validate checkbox
        Then I check "option1"
        And I uncheck "option1"
        And I check "option1" and "option2"

    Scenario: Working with static dropdown
        Then I select "option1" from dropdown

    Scenario: Working with dynamic dropdown
        Then I select "India" from dynamic dropdown by typing "ind"

    Scenario: Working with visible/invisible elements
        Then I verify whether element should be visible or not

    Scenario: Working with radio button
        Then I click "radio1" button

    Scenario: Working with alerts
        # Cypress auto accepts alerts
        When I click on alert button
        And I click on confirm button

    Scenario: Working with child tabs
        When I click on switch button

    Scenario: Working with webtables
        When I verify the "python" book price from a table

    Scenario: Working with mouse hover
        When I mouse hover over the button

    Scenario: Working with child window
        When I click on new window button

    Scenario: Working with iframe
        When I click on a button within a frame



