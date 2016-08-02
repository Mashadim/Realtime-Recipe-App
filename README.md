DataScience's Frontend Code Test
==================

This is an at-home exercise that we use as part of our standard interview process for frontend and full-stack developers.

## Getting Started

* *npm install* the dependencies in your terminal.
* *npm run serve* to run the app.
* Visit localhost:3000 to view app.

## Requirements

Using the provided JSON data representing a collection of meal recipes, create a micro frontend application that meets the following criteria:

+ Display a list (or table) of recipes.    
  + A list of recipes and their info is displayed once app is loaded.   

+ Allow filtering of recipes by a single ingredient.
  + Type in any recipe to view desired recipe.
  + If no recipe typed or recipe is not available all the recipes will display.

+ Add checkboxes to allow selection of multiple recipes.
  + Click 'View Ingredients' to see ingredients on the right side.

+ Show an alphabetically ordered list of distinct ingredients for the selected recipes. This should update as recipes are selected / unselected.
  + You can choose more than one recipe and the total of all ingredients from each recipe will render in alphabetical order.
  + The same ingredients are not repeated.
  + Once ingredients fill up the list you can scroll down to see them all.    
	
* Persist the selections locally and regenerate the view on page refresh.
  + As you filter which recipes you want to see and check/uncheck, this will persist until you refresh the page.