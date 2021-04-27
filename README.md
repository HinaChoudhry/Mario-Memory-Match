# Milestone Project 2 – Mario Memory Match!

My project is for a Super Mario themed memory match card game. The game takes inspiration from the mini-game in the video game Super Mario Bros 3 which has a memory match card game, where the player has to match up pairs of cards in order to win. 
The website contains a homepage, game page as well as modals to select level difficulty from, a victory modal and a game over modal. The website is interactive, using HTML, CSS and JavaScript with libraries and frameworks such as Bootstrap. The aim of the website is to attract players of all ages who can choose their difficulty level according to preference and provide easy navigation for the users.
[Mario Memory Match](https://hinachoudhry.github.io/Mario-Memory-Match/)

## UX

The website is for Super Mario fans both young and old school. The Super Mario theme has been used to attract fans of all ages – old school players, who can enjoy this remake of an old classic and young, who can play an interactive game with a Super Mario theme. The website has a homepage with the game title, “Mario Memory Match!”, a Mario image and background and then an ‘Enter’ button, which allows them to pick the difficulty they want to choose when playing the game. 
The game page contains Super Mario themed images that players have to pair up, as well as music from the original Super Mario game. There is a victory modal for when players match up all the pairs of the cards, which tells the user how long they took to complete and how many flips it took as well. There is also a “game over” modal, if the user runs out of time for matching the pairs.

### User Stories

As a user – 

- I want to be able to navigate the website without needing guidance as to how to do it. 
- I want to be able to restart the game if needed without going to the home screen. 
- I want to be able to choose a difficulty level for the game. 
- I want to keep track of the time and number of flips I take to complete the game. 
- I want the cards to shuffle on each new turn so I get a new set of cards per game. 
- I want attractive colours and layout of the website to engage me. 
- I want a game that can appeal to all ages.
- I want to be able to control the music for the game to my liking. 


### Wireframes

I used the [Balsamiq](https://balsamiq.com/) programme to create my wireframes for the website. These wireframes enabled me to have a foundation of which to build the final website from and give me an idea of what I should be aiming for. It also allowed me to discuss design with my mentor before building the site. A game over modal was not included in the original wireframes as this feature was added later to the website. 

- Desktop Wireframes 
    * [Landing Page](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/desktop/Landin-%20Page-Desktop.png)
    * [Difficulty Modal](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/desktop/Difficulty-desktop.png)
    * [Game Area](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/desktop/Game-desktop.png)
    * [Victory Modal](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/desktop/Victory-desktop.png)

- Tablet Wireframes
    * [Landing Page](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/tablet/Landing-Page-Tablet.png)
    * [Difficulty Modal](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/tablet/Difficulty-modal-tablet.png)
    * [Game Area](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/tablet/Game-tablet.png)
    * [Victory Modal](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/tablet/Victory-tablet.png)

- Mobile Wireframes
    * [Landing Page](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/mobile/Landing-Page-mobile.png)
    * [Difficulty Modal](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/mobile/Difficulty-mobile.png)
    * [Game Area](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/mobile/Game-mobile.png)
    * [Victory Modal](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/wireframes/mobile/Victory-mobile.png0)

### Design
The design of the website took inspiration from the video game Super Mario Bros 3 to really give the website a retro video game feel. As the mini game from the video game was replicated, I chose to use a similar design as the original video game, to really give a feel that users were playing the original mini game. The homepage and game page both make use of Super Mario imagery as well as audio to create a feel of the original mini game. 
### Font
Google Fonts was used to pick the fonts for the website. Press Start P2 and Quicksand were chosen as the final fonts for the website. Press Start P2 was used to emulate a retro video game, which was mainly used for headings, buttons etc while Quicksand was used for text within modals and elsewhere. These were paired together using Google Font’s recommended pairings and they appeared to go well together. 
### Colors
Again, Super Mario Bros 3 was used as the inspiration for the colors used. I used the rgb system and hex codes to allow me to pick the colours more specifically and the artwork for the video game guided this decision. The main colours used for my project outside of the imagery were = 
#268ec3;
#fed8a9;
Rgb(217, 240, 243)
## Features
### Existing Features
### Homepage
The website homepage is the first webpage that the user sees. This is an index.html file so that it is the default page of the website, but the other page is not linked up to it. This is so this page only seen once as an introduction to the game rather than being able to access this page again and again. This page makes use of an introductory title for the game – “Mario Memory Match!”, that grows in animation, and also has an 8-bit image of Super Mario. There is an ‘Enter’ button below the image, when clicked, it displays a difficulty modal. 
### Difficulty Modal
The difficulty modal enables the user to select which difficulty level they would like to attempt for the game. The modal hints to the user to pick a level, with three buttons available to click – easy, medium and hard. There is a 8-bit gif of Bowser at the top of the modal. This was decided as he is the main boss for the Super Mario games, his image would be used to give the user a hint of “You have to deal with me”.
### Game page
The game page contains two different areas. There is the game play area where the cards are generated based on difficulty chosen and at the top of the page, there are also small buttons to reset the game and to turn the background music on and off. The background image for the game is Super Mario themed again, to really give a feel of a retro Super Mario Game. 
### Playing Cards  
The playing cards are loaded after the user selects their difficulty level from the index.html. This loads a number of cards that can be flipped over to reveal an image, which then needs to be matched up with an identical pair. Once the pair is matched, the cards remained flipped, leaving the rest of the cards face down so that the user can guess which of the remained cards have pairs. 
### Victory Modal
This modal appears when the user completes the game by matching all the cards. It tells the user how much time and how many flips it took them to complete the game. It also gives the option to replay the game, or the next level, and has a gif of 4 Super Mario heroes waving at the user. 
### Game Over Modal
This modal appears if the user runs out of time to match up all the cards. It contains a gif of Boo – a cheeky, ghost from the Super Mario games who is known for trouble. The game over modal allows the play to replay the game. 
### Game timer and flip counter
The timer begins at 100 seconds, counting backwards down to 0 and the flip counter begins at 0. The flips are counted per click of the cards and these are shown in the victory modal. 
### Features Left to Implement
I would like to implement a leader board system that records users scores and shows who is at the top of the board. 
## Technologies Used
- [HTML](https://en.wikipedia.org/wiki/HTML) To enable the basic building on the website.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) for styling the website and the CSS grid system was used for the cards layout and responsiveness.
- [JavaScript] https://www.javascript.com/) for the interactivity of the website. 
- [Bootstrap](https://getbootstrap.com/) For the buttons.
- [GitHub](https://github.com/) A remote location and where I can publish my website to host.
- [Gitpod](https://www.gitpod.io/) My preferred IDE for building the website.
- [GIT](https://git-scm.com/) for version control.
- [Google Fonts](https://fonts.google.com/)   to choose and use different fonts for the website.
- [Font Awesome](https://fontawesome.com/)   For different icon elements used.
- [jQuery](https://jquery.com/) and [Popper.js](https://popper.js.org/) To use alongside Bootstrap.
## Testing
Testing information can be found at [TESTING.md](https://github.com/HinaChoudhry/Mario-Memory-Match/blob/master/TESTING.md)
## Deployment
- To deploy the GitHub repository to GitHub pages the following steps were done
- Select Settings at the top of the page.
- Go the the GitHub Pages section from there, down the page.
- In the Source section, click the dropdown menu labelled 'None' and select the 'Master Branch'. THIS HAS NOW CHANGED CHECK IT UP.
- This should automatically refresh the page, deploying the website.
- Scroll back down to the GitHub Pages section, where the link should be available.
To run project locally
- Click the “Clone or download” button under the repository name.
- In the Clone with the HTTPs section, copy the clone URL for the repository.
- Open Git Bash in your local IDE.
- Change the working directory to the location where the cloned directory is to be made.
- Type 'git clone' and paste the URL from which you previously copied.
## Credits
Firstly, I would like to mention that the character Super Mario and the Super Mario games all belong to Nintendo.
### Images
(Link in pages where you got images from here). 
### Audio
(Link in audio links here). 
### Code
(Insert used code here). 
### Acknowledgements
I would like to thank my mentor, Precious Ijege, for his time, advise and comments in working with me to build my project. I would like to thank the Code Institute Slack forum for all their help and in particular the #peer-review-code channel for the input for my project. I would also like to thank the tutors at Code Institute for their valuable advice. 
## Disclaimer
The content and images on this website are for educational purposes only.

