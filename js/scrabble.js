/*****************************
Author: Al Ferreras
*****************************/

//This was given, just changed some names to what I would use and added img
var ScrabbleTiles = [];
ScrabbleTiles["A"] = {"points": 1, "startingNum": 9, "remaining": 9, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg"};
ScrabbleTiles["B"] = {"points": 3, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg"};
ScrabbleTiles["C"] = {"points": 3, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg"};
ScrabbleTiles["D"] = {"points": 2, "startingNum": 4, "remaining": 4, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg"};
ScrabbleTiles["E"] = {"points": 1, "startingNum": 12, "remaining": 12, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg"};
ScrabbleTiles["F"] = {"points": 4, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg"};
ScrabbleTiles["G"] = {"points": 2, "startingNum": 3, "remaining": 3, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg"};
ScrabbleTiles["H"] = {"points": 4, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg"};
ScrabbleTiles["I"] = {"points": 1, "startingNum": 9, "remaining": 9, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg"};
ScrabbleTiles["J"] = {"points": 8, "startingNum": 1, "remaining": 1, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg"};
ScrabbleTiles["K"] = {"points": 5, "startingNum": 1, "remaining": 1, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg"};
ScrabbleTiles["L"] = {"points": 1, "startingNum": 4, "remaining": 4, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg"};
ScrabbleTiles["M"] = {"points": 3, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg"};
ScrabbleTiles["N"] = {"points": 1, "startingNum": 6, "remaining": 6, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg"};
ScrabbleTiles["O"] = {"points": 1, "startingNum": 8, "remaining": 8, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg"};
ScrabbleTiles["P"] = {"points": 3, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg"};
ScrabbleTiles["Q"] = {"points": 10, "startingNum": 1, "remaining": 1, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg"};
ScrabbleTiles["R"] = {"points": 1, "startingNum": 6, "remaining": 6, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg"};
ScrabbleTiles["S"] = {"points": 1, "startingNum": 4, "remaining": 4, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg"};
ScrabbleTiles["T"] = {"points": 1, "startingNum": 6, "remaining": 6, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg"};
ScrabbleTiles["U"] = {"points": 1, "startingNum": 4, "remaining": 4, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg"};
ScrabbleTiles["V"] = {"points": 4, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg"};
ScrabbleTiles["W"] = {"points": 4, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg"};
ScrabbleTiles["X"] = {"points": 8, "startingNum": 1, "remaining": 1, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg"};
ScrabbleTiles["Y"] = {"points": 4, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg"};
ScrabbleTiles["Z"] = {"points": 10, "startingNum": 1, "remaining": 1, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg"};
ScrabbleTiles["Z"] = {"points": 0, "startingNum": 2, "remaining": 2, "img": "./graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};


//Used the same principle as the code above for the slots of the board
var ScrabbleLine = {};
ScrabbleLine.slots = [];
ScrabbleLine.slots[0] = {"letterMulti": 1, "img": "./graphics_data/ScrabbleBoardSlot.png", 'letter': '0'};
ScrabbleLine.slots[1] = {"letterMulti": 2, "img": "./graphics_data/ScrabbleBoardSlotDL.png", 'letter': '0'};
ScrabbleLine.slots[2] = {"letterMulti": 1, "img": "./graphics_data/ScrabbleBoardSlot.png", 'letter': '0'};
ScrabbleLine.slots[3] = {"letterMulti": 1, "img": "./graphics_data/ScrabbleBoardSlot.png", 'letter': '0'};
ScrabbleLine.slots[4] = {"letterMulti": 1, "img": "./graphics_data/ScrabbleBoardSlot.png", 'letter': '0'};
ScrabbleLine.slots[5] = {"letterMulti": 1, "img": "./graphics_data/ScrabbleBoardSlotDW.png", 'letter': '0'};
ScrabbleLine.slots[6] = {"letterMulti": 1, "img": "./graphics_data/ScrabbleBoardSlot.png", 'letter': '0'};

var Score = 0;

//Meant to check dictionary currently doesnt work
function isWord(word){
	$.get('http://localhost:8000/scrabbleDict.txt', function(data){
        if(data.indexOf(word) >= 0)
            return true;
        else
            return false;
    }, 'text');
};

function scoreWord(){
    var points = 0;
    var reachedDW = false;

    //Get the points for the letters in the slots
	for(var i = 0; i < ScrabbleLine.slots.length; i++)
    {
        if(ScrabbleLine.slots[i]['letter'] == '0')
            break;
        points += ScrabbleTiles[ScrabbleLine.slots[i]['letter']]['points'] * ScrabbleLine.slots[i].letterMulti;
        if(i == 5){reachedDW = true;}
    }
    
    //Double word tile is at slots[5] so if it reaches it double the score
    if(reachedDW)
    {
        Score += points * 2;
    }
    else
    {
        Score += points;
    }
    
    //Removes images from the hand that are on board
    $('#hand img').each(function() {
        if($(this).attr('col') != 8)
            $(this).remove();
    });

    //Update html
    $('#score').html(Score);
    
    clearLine();
    drawToFull();
};

function gameReset(){
	Score = 0;
    $('#score').html(Score)
    //Clear the hand of tiles
    $('#hand img').remove();
    
    for(var letter in ScrabbleTiles)
        ScrabbleTiles[letter].remaining = ScrabbleTiles[letter]['startingNum'];
    
    clearLine();
    drawToFull();
};

//Resets the slots for scoring purposes
function clearLine(){
	for(var i = 0; i < ScrabbleLine.slots.length; i++)
    {
        ScrabbleLine.slots[i].letter = '0';
    }
};

function isSlotEmpty(index){
	if(ScrabbleLine.slots[index]['letter'] == '0')
        return true;
    
    return false;
};

function drawToFull(){
	var hand = [];
	var remainingTiles = [];
	
    //Make array of remaining tiles
    for(var letter in ScrabbleTiles)
    {
        for(var i = 0; i < ScrabbleTiles[letter]["remaining"]; i++)
        {
            remainingTiles.push(letter);
        }
    }
    
    //Randomly pick tiles from remaining tiles
    for(var i = 0; i < (7 - $('#hand img').length); i++)
    {
        //more tiles than needed
        if(remainingTiles.length > (7 - $('#hand img').length))
        {
            randomNumber = Math.floor(Math.random()*(remainingTiles.length-1));
            hand.push(remainingTiles[randomNumber])
            remainingTiles.splice(randomNumber, 1);
            ScrabbleTiles[remainingTiles[randomNumber]]['remaining']--;
        }
    }
    
    //Create Tile element and make it droppable
    var handDiv = document.getElementById('hand');
    for(var i = 0; i < hand.length; i++)
    {
        var tile = document.createElement('img');
        tile.classList.add('letterInHand');
        tile.setAttribute('col', 8);
        tile.setAttribute('letter', hand[i]);
        tile.src = ScrabbleTiles[hand[i]]['img'];
        handDiv.appendChild(tile);
    }
    //Make lettersInHand draggable
    $('.letterInHand').draggable({
            revert: 'invalid',
            cursor: 'move',
            snap:'.slot'
        });
    
};

$(document).ready(function(){
    var lineDiv = document.getElementById('line');
    
    $('#submitWord').on('click', function(event){
        event.preventDefault();
        scoreWord();
    });
    $('#newGame').on('click', function(event){
        event.preventDefault();
        gameReset();
    });
    
    //Add Background Images to each slot
	for(var i = 0; i < ScrabbleLine.slots.length; i++)
    {
        var newSlot = document.createElement("img");
        newSlot.classList.add('slot');
        newSlot.id = i;
        newSlot.src = ScrabbleLine.slots[i].img;
        lineDiv.appendChild(newSlot);
    }
    //Makes slots dropppable
    $('.slot').droppable({
        accept: function(draggable){

            var slotNum = $(this).attr('id');
            if(isSlotEmpty(slotNum))
            {
                if(slotNum != 0 && !isSlotEmpty(slotNum-1))
                    return true;
                else if(slotNum == 0)
                    return true;
                else
                    return false;
            }
            else{return false}
        },
        drop: function(event, ui){
            var slotNum = $(this).attr('id');
            $(ui.draggable).attr('col', slotNum);
            ScrabbleLine.slots[slotNum]['letter'] = $(ui.draggable).attr('letter');
        }
    });
    //Make the hand droppable
    $('#hand').droppable({
        tolerance: 'pointer',
        drop: function(event, ui){
            var slotNum = $(ui.draggable).attr('col');
            if(slotNum != 8)
                ScrabbleLine.slots[slotNum]['letter'] = '0';
            $(ui.draggable).attr('col', 8);
        }
    });
    
    gameReset();
});