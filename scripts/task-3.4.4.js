let favouriteRecipe = {

    recipeTitle: 'Spagetti Bolgnese',
    servings: 6,
    ingredients: [
        '1 tbsp olive oil',
        '4 rashers streaky smoked bacon',
        '2 medium onions',
        '2 carrots',
        '2 celery sticks',
        '2 garlic cloves',
        '2-3 sprigs of rosemary',
        '500g mince beef',
        '2 x 400g tins plum tomatoes',
        'small pack of basil',
        '1 tsp dried oregano',
        '2 fresh bay leaves',
        '1 beef stock cube',
        '2 tbsp tomato puree',
        '1 red chilli',
        '125ml red wine',
        '6 cherry tomatoes',
    ],
    directions: ['Make bolgnese sauce', 'fry the mince', 'add the onions', 'mix together', 'make the spagetti', 'eat'  
    ],
    letsCook: function() {
    console.log("I'm hungry let's cook " + favouriteRecipe.recipeTitle);
}
};

var ingredients = favouriteRecipe.ingredients;

for(var index= 0; index < ingredients.length; index++ ) {
    console.log( ingredients[index]);
}