Feature: Page navigation
  Description: User should navigate thru pages by navigation buttons and menus

  Scenario: Navigation from Landing page to Getting started page
    Description: User should navigate to Getting started page by clicking on Getting Started button on Landing page

    Given I am on the Landing page
    When I click on Get Started button
    Then I am redirected to Getting Started page
    And I see Angular icon

#  Scenario: Navigation from Landing page to GitHub
#    Description: Github button on Landing page should be clickable and contain link to ngx-bootstrap repo
#
#    Given I am on the Landing page
#    When I can click on GitHub button
#    Then It links to ngx-bootstrap repository
#
#  Scenario: Navigation thru component pages using left side menu
#    Description: User should navigate thru component pages by clicking on links in left navigation menu
#
#    Given I am on the Getting Started page
#    When I click on "Accordion" link in left navigation menu
#    Then I am redirected to Accordion page
#    And I see Accordion demo content

#    When I click on "Alerts" link in left navigation menu
#    Then  I am redirected to Alerts page
#    And I see Alerts demo content


