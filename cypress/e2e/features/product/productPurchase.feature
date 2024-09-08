  Feature: For product purchases 

  Scenario: Select a product and proceed to checkout

    Given I am logged in the page
    When I select the product and I add the product to the cart
    And I proceed to checkout
    Then I should see the order confirmation page
  