Feature: Navigation throw pages
  Description: User should navigate throw pages by navigation button

  Scenario: Navigation from Landing page to Getting started page
    Given I am on the landing page
    When I click on Get Started button
    Then I am redirected to Getting Started page
    And I see Angular icon

#Replace this scenario with checking link and button isClickable
  Scenario: Navigation from Landing page to GitHub
    Given I am on the landing page
    When I click on GitHub button

#  Scenario: Navigation thru component pages using side menu
