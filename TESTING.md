# Testing

## Code Validation
- [W3C Mark-up Validation](https://validator.w3.org/) was used for checking html code for validity and to ensure there were no errors in the html code. 
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) was used for checking errors in the CSS code. 
- [JSHint](https://jshint.com/) was used to check for validity of the JavaScript code.

The following links show validation for code, for the html, css and JavaScript.

1. [index.html](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/readmeimages/index.htmlvalidation.png)
2. [game.html](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/readmeimages/game.htmlvalidation.png)
3. [style.css](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/readmeimages/CSSValidation.png)
4. [script.js](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/readmeimages/script.jsvalidation.png)
5. [index.js](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/readmeimages/index.jsvalidation.png)


## User Story Tests

As a user – 
- I want to be able to navigate the website easily.
    * There is a clear Enter button on the landing page which directs the user to choose a difficulty level. This then leads to the Game Area where the game is played. There is also a Tutorial button on the landing page if needed.
- I want to be able to restart the game if needed without going to the home screen. 
    * There is a restart button at the top right of the game page for the user to restart if wanted.
- I want to be able to choose a difficulty level for the game. 
    * There are three different difficulty levels to choose from in the Difficulty modal in the landing page.
- I want to keep track of the time and number of flips I take to complete the game. 
    * The game keeps track of the amount of time and flips a user takes to complete the game. These figures are then shown in the victory modal when a user wins the game. 
- I want the cards to shuffle on each new turn so I get a new set of cards per game. 
    * The Fisher Yates algorithm has been used to shuffle the playing cards every turn, so that the user always has new cards to play with per turn.
- I want attractive colours and layout of the website to engage me. 
    * The website contains many colours and images that catch the users eye and attract them to the website. 
- I want a game that can appeal to all ages.
    * The theme for the game is Super Mario but from an older version of the game franchise. This is to attract younger players with the Super Mario theme but to also attract older players who have previously played the retro Super Mario games, in particular, Super Mario Bros 3.
- I want to be able to turn background music on and off to my liking, rather than having it play automatically. 
    * The background music for the game is initially muted when the player uses the website. From here, there are buttons to turn on music and turn it off as the user wishes.



# Responsiveness 

## Index.html 

### Desktop view

In the desktop view, there is a background image which is very similar to the opening for Super Mario Bros 3. On top of the background, there is an 8-bit image of Mario which takes up a portion of the viewport. Above the image of Mario, is the title of the game, "Mario Memory Match!" in Super Mario style writing, and when the page first loads the title animates. It goes from a tiny image and grows to the width of the viewport, to attract the user. There is also an "Enter" button and 'Tutorial' button near the bottom of the page, side by side.

### Tablet view 

In the tablet view, the imagery remains the same as desktop view but all the images, titles, buttons etc have shrunk down appropriately to fit the viewport. The title scales down to fit and the "Enter" and 'Tutorial' button has also scaled down. 

### Mobile view 

In the mobile view, again, the imagery remains the same as desktop and tablet views and the images and titles etc have shrunken down to fit the viewport. The two buttons now stack on top of each other, rather than being side by side.

## Difficulty Modal

### Desktop view

When the "Enter" button has been clicked on the landing page, the difficulty modal appears on the screen. It is smaller than the viewport to intentionally give the feel of it being a modal, rather than a new page for the user to use. The modal has an gif and three buttons which are centered to an appropriate size on the desktop viewport so that they are easy to see and read. There is also an 'x' in the top right corner of the modal, allowing the user to close it. 

### Tablet view

In the tablet view, the modal again is smaller than the viewport but by less pixels. The imagery and buttons are again centered in the modal. 

### Mobile view

The modal for mobile view spreads across the viewport but not beyond the screen width, so it fits appropriately when viewing the modal on a mobile. 

## Tutorial Modal

### Desktop view 

The Tutorial modal pops up on the screen when the related button is pressed. This is again smaller than the viewport to portray a modal rather than a 'new' page. The contents are stacked above each other. 

### Tablet view

The modal scales down but does not change in any other way. 

### Mobile view

The modal again scales down to fit the viewport, but does not hange. 


## Game.html

### Desktop view

The main feature of the game page is the playing area of where the cards are shown. In the desktop view, the cards are laid out in columns of 6. This is so that they do not go beyond the width of the viewport and so the user does not have to scroll up or down when they play, rather they can play without scrolling for all difficulties. 

### Tablet view

In the tablet view, the number of columns is 5 and the card size have been adjusted, with media queries, so that the user doesn't need to move around the page in order to play. The cards are laid out across the screen, without having to scroll up and down. 

### Mobile view

For mobile, depending on which way the user holds their phone, the grid adapts and changes the number of columns. If the mobile is in landscape mode, it can fit 5 cards width-wise onto the viewport. However, in portrait mode, the grid is shrunken down to 4 playing cards per column. Again, the actual size of the cards has been amended with media queries so that they fit the viewport rather than the user having to scroll up and down to play the game, for portrait mode. 

## Victory Modal

### Desktop view 

The victory modal is similar to the difficulty modal in that it does not take up the full screen of the viewport. It is smaller than the width of the screen and the gif, "victory" title, stats and Retry and Home button are stacked on top of one another. Underneath, the difficulty level buttons are displayed side by side in a line.

### Tablet view 

The victory modal scales down size as the viewport changes on the tablet view, with no changes in this viewport. 

### Mobile view 

The modal takes up the width of the viewport, however the image and buttons again shrink down to fit appropriately and instead of the difficulty buttons being in one line, they are spread over 2 lines with easy and medium on top and hard on below. 

## Game Over Modal

### Desktop view 

The game over modal differs to the other modals in the game. This is more of an overlay rather than a pure modal, with a semi-transparent overlay that covers the whole screen and a gif of Boo and a retry and home button that fill up the page. The idea behind this was that if the player loses the game, Boo will 'take over' the game and is now in control and it was decided that this would be better portrayed with an overlay and large gif, rather than a small modal. 

### Tablet view

In the tablet view, the overlay remains the same, with the semi transparent overlay, gif and two buttons but they are scaled down. 

### Mobile view

In mobile, the modal again scales down to fit the viewport.


## Responsiveness in browsers

### [Google Chrome](https://www.google.co.uk/chrome/?brand=CHBD&gclid=EAIaIQobChMIi5nY65OY6gIVKoBQBh15wQBrEAAYASAAEgKlOvD_BwE&gclsrc=aw.ds)

This was the default browser used to build the website in. DevTools was used to check for responsiveness in different viewports as well as inspecting code. With this browser, each page of the website is responsive and acts how it should.

### [Firefox](https://www.mozilla.org/en-GB/firefox/new/)

The website is also responsive on Firefox and there were no bugs found while using the website in Firefox.

### [Microsoft Edge](https://www.microsoft.com/en-us/edge)

The website is responsive in Microsoft Edge and has no bugs. 

### [Safari](https://www.apple.com/uk/safari/) 

The website displays correctly initially and it is responsive, however on actually flipping the cards, there is an animation bug that appears.

## Bugs and resolutions

- There was white space on the right side of the landing page.
    * This was resolved by changing the .landingbg width to 100vw.
- The images for .card had an unwanted background and border behind it.
    * Resolved by setting the .card background-color and border to 'unset'.
- White space again on the right side of the landing page, this time caused by Font Awesome icons changing size for each viewport, hence being too large for mobile.
    * Resolved by changing .controls position to relative and removing the left percentage. 
- When using the 'visible' and 'invisible' classes with jQuery to add and remove certain cards based on the difficulty level (so more or less cards were shown), this was interfering with the CSS class of 'visible' resulting in the cards not flipping correctly. 
    * Ultimately, the use of the visible class with jQuery was scrapped. Instead, a JavaScript if else statement was created that manipulated the .hide-cards class in CSS. 
- The background music was not playing initially, automatically. 
    * It was strongly advised not to have music playing automatically. This idea was also scrapped and buttons were made to turn music off and on as wanted.
- The URLParams were not working properly, as the query selector was coming back as 'null'. 
    * Resolved by splitting the JavaScript functionality into two files, one for the functionality of index.html and the other for game.html
- Once the JavaScript files had been split, the functionality for the different difficulty levels stopped working. 
    * Resolved by calling the function of 'pair(difficulty)'.
- Victory modal was not showing when the user won the game. 
    * The If statement that was to check if the number of matched cards equalled to the number of cards per difficulty array was incorrect. Resolved by making a countCard object and changing the If statement so the number of matched cards per difficulty level would match the number in the countCard object, for each specific difficulty level. 
- Game over modal overlay was cut off from the bottom. 
    * Resolved by changing the the modal position to relative. 
- Part of the card front was showing on Safari, with the user able to see a bit of the image of the card front at the bottom of the card. 
    * Removed the card transformation from CSS. 


## Unresolved bugs

- There is still an animation error on Safari and Ipad when the cards flip over, that is unresolved.