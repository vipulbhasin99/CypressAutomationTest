Feature: Cypress API Testing

    Background:
        Given I go to "https://rahulshettyacademy.com/angularAppdemo/"

    Scenario: Working with cy.intercept to modify response
        When I mock the api response to get only one record
        Then I see error message "Oops only 1 Book available"

    Scenario: Working with intercept to modify request
        When I mock the api request to some other user
        Then I should get status code as "200"
    #ideally, status code should be 403

    Scenario: Working with APIs
        When I hit the POST request
        Then I delete the added book