Feature: User Management
  As an Automation Engr
  I would automate the application
  So that I can show my automation capabilities

  Scenario: Add user
    Given User is on way2automation page
    When user clicks on add buton and enters FirstName LastName UserName Password Customer Role Email CellPhone
    Then user clicks on Save button

  Scenario: Delete user User Name: Tom and validate user has been deleted
    Given user searches tom and Tom is displayed
    Then user clciks on delete icon
    Then tom is deleted successfully
