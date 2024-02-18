Feature: Home

    Scenario: User navigates to Home
        Given I am a User attempting to get movies
        When I navigate to home
        Then I can search movie
        And I can select moview