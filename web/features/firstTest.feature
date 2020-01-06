Feature: Newtours demo Registration and Login

  @test
  Scenario: Register a new user account
    Given I goto Registration page
    When I enter valid ContactInformation
    And I enter valid MailingInformation
    And I enter valid UserInformation
    And I submit form to register
    Then I see registration success page

  @test
  Scenario: Verify Login using existing account
    Given I goto Signon page
    When I submit valid LoginDetails to Login
    Then I see flight finder page

  @test
  Scenario Outline: Book flight from Europe to USA
    Given I login to find a flight
    When I select <origin> as departing and <destination> as arriving airports
    And I select departing date and returning date
    And I select flight preferences
    And I search for flights
    Then I select first flight from results
    And I submit form to secure reservation
    Then I see confirmation page
    Examples:
      | origin | destination |
      | London | Seattle     |
      | Paris  | Portland    |
      | Zurich | Acapulco    |