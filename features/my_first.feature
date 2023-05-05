Feature: Iniciar una conversación

@user1 @web
Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 2
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click options
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds