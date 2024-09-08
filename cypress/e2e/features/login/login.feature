Feature: Login functionality

  Scenario: Successful login
    Given I open the login page
    When I enter valid credentials
    Then I should be see Logged in as 

  Scenario: Successful login with new user
    Given I open the login page
    When I enter the new valid credentials
    Then I should be see ACCOUNT CREATED!