import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './components/recipe';
import EditRecipe from './components/modals/editrecipe';
import AddRecipe from './components/modals/addrecipe';
require('./styles.scss');
//to run script remember to use webpack-dev-server --progress --colors --host $IP --port $PORT

var defaultRecipes = [
  {
    name: 'Rice pudding',
    ingredients: ['rice', 'water', 'milk','butter', 'pinch of salt', 'Simple but delicious!']
  },
  {
    name: 'Banana Smoothie',
    ingredients: ['bananas', 'milk', 'apples', 'kale', 'lemon', 'flax seeds']
  },
  {
    name: 'Vinegar pie',
    ingredients: ['vinegar custard', 'crust', "I'm sure you'll like it!"]
  }
];

if(!localStorage.getItem('_sciencecoder_recipes')) {
  localStorage.setItem('_sciencecoder_recipes', JSON.stringify(defaultRecipes));
} 
else {

}

class RecipeBox extends React.Component {
  state = {
    recipes: JSON.parse(localStorage.getItem('_sciencecoder_recipes')),
    newRecipe: {
      name: 'Untitled',
      ingredients: []
}

};
   makeRecipe() {
     $('.add-recipe-modal').modal('show');
  }
  setStorage(data) {
    localStorage.setItem('_sciencecoder_recipes', JSON.stringify(data));
  }
  addName = (e) => {
    var arr = this.state.recipes;
    var ingredients = this.state.newRecipe.ingredients;
    this.setState({
      recipes: arr,
      newRecipe: {name: e.target.value, ingredients: ingredients}
    });
  }
  addIngredients = (e) => {
    var arr = this.state.recipes;
    var name = this.state.newRecipe.name;
    this.setState({recipes: arr, newRecipe: {name: name, ingredients: e.target.value.split(',')}});
  };
  addRecipe = () => {
    var arr = this.state.recipes;
    var recipeData = this.state.newRecipe;
    var newRecipe = {
      name: recipeData.name,
      ingredients: recipeData.ingredients
    };
    arr.push(newRecipe);
    this.setStorage(arr);
    this.setState({recipes: JSON.parse(localStorage.getItem('_sciencecoder_recipes')), newRecipe: {name: 'Untitled', ingredients: []}});
  };
  saveRecipeChanges = (inputText, textareaText, i) => {
    var recipes = this.state.recipes;
    recipes[i] = {
       name: inputText,
      ingredients: textareaText.split(',')
    };
    this.setStorage(recipes);
    this.setState({recipes: JSON.parse(localStorage.getItem('_sciencecoder_recipes')), newRecipe: {name: 'Untitled', ingredients: []}});
 };
 removeRecipe = (index) => {
   var arr = this.state.recipes;
   arr.splice(index, 1);
   this.setStorage(arr);
   this.setState({recipes: arr});
 };
 
  componentDidMount() {
    $('.modal').modal('hide');
  }
  render() {
    
    var removeRecipe = this.removeRecipe;
    var saveRecipeChanges = this.saveRecipeChanges;
    return (
      <div className='container' id="accordion" role="tablist" aria-multiselectable="true">
        <div className='box row'>
          {this.state.recipes.map(function(recipe, index) {
            return <Recipe
              id={'recipe' + index}
              label={'heading'+index}
              key={recipe.name + index}
              ingredients={recipe.ingredients}
              name={recipe.name}
              deleteRecipe={removeRecipe}
              saveChanges={saveRecipeChanges}
              num={index} />;
           
          })}
         
        </div>
        <AddRecipe addName={this.addName} addIngredients={this.addIngredients} addRecipe={this.addRecipe} />
        <button className='btn btn-primary' type='submit' onClick={this.makeRecipe} >Add Recipe</button>
      </div>
    );
  }
}

ReactDOM.render(<RecipeBox />, document.getElementById('app'));