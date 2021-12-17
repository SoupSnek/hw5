Author: Al Ferreras
Github: https://github.com/SoupSnek/hw5
Github Pages: https://soupsnek.github.io/hw5/

Things that need work:
•When the player runs out of tiles they receive no feedback
    the tiles just stop coming
•It looks ugly

Features:
•Tiles in hand are randomly selected from remaining tiles in 
    current game
•Tiles can be dragged and dropped to the slots and back to the hand
•I made a custom line that has one double letter slot and
    double word slot. The player is forced to start from left most
    slot and the double word slot is the 2nd farthest slot to incentivize
    long words
•The player must start from the left most slot and can only put
    tiles into the slot to the right of the that most recent slot
    they can be taken out in any order though
•Game keeps track of the score for the current game and resets when
    player hits Restart
•Player can keep playing tiles until it there are no remaining tiles
•Board is cleared after each word is scored and the hand is refilled
    with correct number
•Restarting the game is always available
