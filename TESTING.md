# Testing

## Code Validation
- [W3C Mark-up Validation](https://validator.w3.org/) was used for checking html code for validity and to ensure there were no errors in the html code. 
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) was used for checking errors in the CSS code. 
- [JSHint](https://jshint.com/) was used to check for validity of the JavaScript code.

The following links show validation for code, for each html and css file.

1. [index.html]()
2. [game.html]()
3. [style.css]()
4. [script.js]()
5. [index.js]()


## User Story Tests

As a user – 
- I want to be able to navigate the website without needing guidance as to how to do it. 
    * There is a clear Enter Game button on the landing page which directs the user to choose a difficulty level. This then leads to the Game Area where the game is played.
- I want to be able to choose a difficulty level for the game. 
    * There are three different difficulty levels to chose from in the Difficulty modal in the landing page.
- I want to keep track of the time and number of flips I take to complete the game. 
    * The game keeps track of the amount of time and flips a user takes to complete the game. These figures are then shown in the victory modal when a user wins the game. 
- I want the cards to shuffle on each new turn so I get a new set of cards per game. 
    * The Fisher Yates algorithm has been used to shuffle the playing cards every turn, so that the user always has new cards to play with per turn.
- I want attractive colours and layout of the website to engage me. 
    * The website contains many colours and images that catch the users eye and attract them to the website. 
- I want a game that can appeal to all ages.
    * The theme for the game is Super Mario but from an older version of the game franchise. This is to attract younger players with the Super Mario theme but to also attract older players who have previously played the retro Super Mario games, in particular, Super Mario Bros 3.
- I want to be able to turn background music on and off to my liking, rather than having it play automatically. 
    * The background music for the game is initially muted when the player uses the website. From here, there are buttons to turn on music and turn it off as the users likes.



# Responsiveness 

## Index.html 

### Desktop view

In the desktop view, there is a background image which is very similar to the opening for Super Mario Bros 3. On top of the background, there is an 8-bit image of Mario which takes up a portion of the viewport. Above the image of Mario, is the title of the game, "Mario Memory Match" in Super Mario style writing, and when the page first loads the title animates. It goes from a tiny image and grows to the width of the viewport, to attract the user. There is also an "Enter Game" button near the bottom of the page. 

### Tablet view 

In the tablet view, the imagery remains the same as desktop view but all the images, titles, buttons etc have shrunk down appropriately to fit the viewport. The title scales down to fit and the "Enter game" button has also scaled down. 

### Mobile view 

In the mobile view, again, the imagery remains the same as desktop and tablet views and the images and titles etc have shrunken down to fit the viewport.  

## Difficulty Modal

### Desktop view

When the "Enter Game" button has been clicked on the landing page, the difficulty modal appears on the screen. It is smaller than the viewport to intentionally give the feel of it being a modal, rather than a new page for the user to use. The modal has an gif and three buttons which are centered to an appropriate size on the desktop viewport so that they are easy to see and read. There is also an 'x' in the top right corner of the modal, allowing the user to close it. 

### Tablet view

In the tablet view, the modal again is smaller than the viewport but by less pixels. The imagery and buttons are again centered in the modal. 

### Mobile view

The modal for mobile view spreads across the viewport but not beyond the screen width, so it fits appropriately when viewing the modal on a mobile. 

## Game.html

### Desktop view

The main feature of the game page is the playing area of where the cards are shown. In the desktop view, the cards are laid out in columns of 4. This is so that they do not go beyond the width of the viewport and so the user does not have to scroll left or right when they play, rather they can play without scrolling for the easy difficulty, but for medium and hard, the game area needs to be scrolled down. 

### Tablet view

In the tablet view, the grid for the game is again in columns of 4. 

### Mobile view

For mobile, depending on which way the user holds their phone, the grid adapts and changes the number of columns. If the mobile is in landscape mode, it can fit 4 cards width-wise onto the viewport. However, in portrait mode, the grid is shrunken down to 2 playing cards per column.

## Victory Modal

### Desktop view 

The victory modal is similar to the difficulty modal in that it does not take up the full screen of the viewport. It is smaller than the width of the screen with 3 buttons that stack on top of one another. 

### Tablet view 

The victory modal scales down size as the viewport changes on the tablet view, the image downsizes but the buttons remain stacked on top of each other. 

### Mobile view 

The modal takes up the width of the viewport, however the image and buttons again shrink down to fit appropriately. 

## Game Over Modal

### Desktop view 

The game over modal is similar to the difficulty and victory modals. It doesn't take up the full screen but is large enough to be identified as a modal. The image, writing and buttons are stacked in this mode.

### Tablet view

In the tablet view, the modal's images and buttons scale down to size.

### Mobile view

In mobile, the modal itself scales down as do the features inside of it to fit the mobile viewport. 


## Responsiveness in browsers

### [Google Chrome](https://www.google.co.uk/chrome/?brand=CHBD&gclid=EAIaIQobChMIi5nY65OY6gIVKoBQBh15wQBrEAAYASAAEgKlOvD_BwE&gclsrc=aw.ds)

This was the default browser used to build the website in. DevTools was used to check for responsiveness in different viewports as well as inspecting code. With this browser, each page of the website is responsive and acts how it should.

### [Firefox](https://www.mozilla.org/en-GB/firefox/new/)

The website is also responsive on Firefox and there were no bugs found while using the website in Firefox.

### [Microsoft Edge](https://www.microsoft.com/en-us/edge)

The website is responsive in Microsoft Edge and has no bugs. 

### [Safari](https://www.apple.com/uk/safari/) 

The website displays correctly initially and it is responsive, however on actually flipping the cards, there is an animation error that appears.

## Bugs and resolutions

- On the index.html, there was white space on the right side of the screen on all viewports. 
    * This was resolved by using `html, body{width: 100%; overflow-x: hidden;}` in the css file. 



## Unresolved bugs

- The background image for the FAQ scales down to smaller viewports but doesn't focus on the main coffee cup with the coffee art the smaller the viewport gets. It gets cropped out inside of focusing into the coffee art.