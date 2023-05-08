Feature: Pruebas ghost

@user1 @web
Scenario: Cambiar título y descripción del blog
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click general
  And I wait for 2 seconds
  And I click expand title and description
  And I wait for 2 seconds
  And I type title "<TITLE>"
  And I wait for 1 seconds
  And I type description "<DESCRIPTION>"
  And I user save settings
  And I wait for 2 seconds
  Then I title was updated
  And I wait for 1 seconds

