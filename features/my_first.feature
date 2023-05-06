Feature: Pruebas ghost

@user1 @web
Scenario: Creación de tag
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click tag
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter name tag "<TAG1>"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I validate title tag "<TAG1>"
  And I wait for 2 seconds
  When I click tag
  And I wait for 2 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds

@user2 @web
Scenario: Modificación de tag campo nombre
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 12 seconds
  And I click tag
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter name tag "<TAG2>"
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds
  Then I validate title tag "<TAG2>"
  When I wait for 2 seconds
  And I get text value slug
  And I wait for 2 seconds
  And I click tag
  And I wait for 2 seconds
  And I click tag list
  And I enter name tag "<TAG3>"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I validate title tag "<TAG3>"
  When I wait for 2 seconds
  And I click tag
  And I wait for 2 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds

@user3 @web
Scenario: Borrar tag
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 14 seconds
  And I click tag
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter name tag "<TAG2>"
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds
  Then I validate title tag "<TAG2>"
  When I wait for 2 seconds
  And I get text value slug
  And I wait for 2 seconds
  And I click tag
  And I wait for 2 seconds
  And I click tag list
  And I wait for 2 seconds
  And I click delete tag
  And I wait for 2 seconds
  And I click confirm delete
  And I wait for 2 seconds
  Then I search tag
  When I wait for 2 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds

@user4 @web
Scenario: Asignar tag a un post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 15 seconds
  And I click tag
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter name tag "<TAGPOST>"
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds
  Then I validate title tag "<TAGPOST>"
  When I wait for 2 seconds
  And I get text value slug
  And I wait for 2 seconds
  And I click post
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I enter name post "<POST1>"
  And I wait for 2 seconds
  And I enter content post "<CONPOST1>"
  And I wait for 2 seconds
  And I click post
  And I wait for 2 seconds
  Then I search post "<POST1>"
  And I wait for 2 seconds
  When I click settings post
  And I wait for 2 seconds
  And I assing tag to post "<TAGPOST>"
  And I wait for 2 seconds
  And I close settings post
  And I wait for 2 seconds
  And I click update post
  And I wait for 2 seconds
  And I click confirm update post
  Then I validate post publication
  When I wait for 2 seconds
  And I click post
  When I wait for 10 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds

@user5 @web
Scenario: Asignar tag a una pagina
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 16 seconds
  And I click tag
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter name tag "<TAGPAGE>"
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds
  Then I validate title tag "<TAGPAGE>"
  When I wait for 2 seconds
  And I get text value slug
  And I wait for 2 seconds
  And I click page
  And I wait for 2 seconds
  And I click new page
  And I wait for 2 seconds
  And I enter name page "<PAGE1>"
  And I wait for 2 seconds
  And I enter content page "<CONPAGE1>"
  And I wait for 2 seconds
  And I click page
  And I wait for 2 seconds
  Then I search page "<PAGE1>"
  And I wait for 2 seconds
  When I click settings page
  And I wait for 2 seconds
  And I assing tag to post "<TAGPAGE>"
  And I wait for 2 seconds
  And I close settings page
  And I wait for 2 seconds
  And I click update page
  And I wait for 2 seconds
  And I click confirm update page
  Then I validate page publication
  When I wait for 2 seconds
  And I click page
  When I wait for 7 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds