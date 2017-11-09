Feature: Navigation throw pages
  Description: User should navigate throw pages by navigation button

  Scenario: Navigation from landing page to Getting started page
    Given I am on the landing page
    When I click on Get Started Button
    Then I am redirected to Getting Started page
    And I see Angular icon
