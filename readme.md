# My Surge Link: cimontoya-comic-lesson.surge.sh


# ajax-drill Do Jquery orrrr

Exercise using AJAX calls to the xkcd site and DOM manipulation

#### Link jQuery and ajax.js to index.html
#### Lay out your basic HTML page in index.html
* don't forget to include your head and body!

# fetch-drill Do a fetch request using pure JS

Exercise using Fetch to the xkcd site and DOM manipulation

#### Link fetch.js to your index.html
#### Lay out your basic HTML page in index.html
* don't forget to include your head and body!

# After linking your Fetch or Ajax follow the below instructions!

#### Let's try a basic request to the xkcd API!
* Use the code provided to make sure your data is logging

#### Create a h1, p, and img tag on your index.html page

#### Target the h1 element and have the text display the vaule of 'data.title'

#### Target the p element and have the text display value of 'data.alt'

#### Target the img element and set the source to the value of 'data.img'

## Dynamic Element Test
**CREATE THESE ELEMENTS WITH JQUERY**

#### Create a p tag and set the text to the value of 'data.safe_title'
- have appear underneath the h1 you made earlier

#### Create another p tag and set this text to display "comic  number " with data.num in the text of the p tag

- make it appear above the image

## Stretch it out

#### Make a CSS sheet and connect it to your index.html
- give your image a border
- give your border a color
- change the text color of the p tags so that they are all the same


#### Create a button in your index.html
- call this button navi
- When the button is clicked have it alert the user 'hey are you listening?'

#### Create a button in your index.html
- call it wallPaper
- When the button is clicked change the background color of the whole web page

#### See if you can write a function to change the comic when the page is loaded.

#### Add a CSS framework to your page
- don't forget to put the CDN in the right place
- use the grid or flexbox to have the page be more visually appealing.
  - if you get stuck look at bootstrap or materialize docs

#### When it is done deploy to surge!

#### Bonus See if you can use this function to randomize the comics
```
function randomize(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}
```
