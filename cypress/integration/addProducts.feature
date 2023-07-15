Feature: Shopping on Amazon

    Background:
        Given I am on Amazon UK homepage
        When I set the delivery location to 'EC1M 5RR'


    Scenario Outline: Add products to the basket
        And I search for '<searchTerm>'
        And I sort the search results by "Avg. Customer review"
        And I chose any product from the top 5 visible products and add "2" items to the basket
        And I go to the basket
        Then I verify that the selected items were added to the basket
        And I verify that the chosen quantity is displayed as "2"

        Examples:
            | searchTerm     |
            | amazon voucher |
            | gift card      |

# Scenario: Add products to the basket
#     And I search for 'Amazon voucher'
#     And I sort the search results by "Avg. Customer review"
#     And I chose any product from the top 5 visible products and add "2" items to the basket
#     And I go to the basket
#     Then I verify that the selected items were added to the basket
#     And I verify that the chosen quantity is displayed as "2"

# Scenario: Add products to the basket
#     And I search for 'gift card'
#     And I sort the search results by "Avg. Customer review"
#     And I chose any product from the top 5 visible products and add "2" items to the basket
#     And I go to the basket
#     Then I verify that the selected items were added to the basket
#     And I verify that the chosen quantity is displayed as "2"
