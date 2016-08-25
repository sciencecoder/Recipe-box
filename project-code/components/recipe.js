import React from 'react';
import EditRecipe from './modals/editrecipe';
class Recipe extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  };
 
  edit = () => {
   $('#modal'+this.props.num).modal('show');
  };
  
  removeRecipe = () => {
    this.props.deleteRecipe(this.props.num);
  };
  render() {
    return  (<div className="panel">
    <div className="panel-heading" role="tab" id={this.props.label}>
      <div className="panel-title">
        <a className='btn' data-toggle="collapse" data-parent="#accordion" href={'#'+ this.props.id} aria-expanded="false" aria-controls={this.props.id}>
          {this.props.name}
        </a>
      </div>
    </div>
    <div id={this.props.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby={this.props.label}>
      <div className='container'>
      <h6 className='text-xs-center panel-title'>Ingredients</h6>
      <ul className='list-group'>
      {this.props.ingredients.map(function(ingredient, index) {
          return <li className='list-group-item' key={ingredient + index}>{ingredient}</li>;
        })}
      </ul>
      <button className='btn btn-danger' onClick={this.removeRecipe}>Delete</button>
      <button className='btn btn-default' onClick={this.edit}>Edit</button>
      <EditRecipe 
        id={'modal' + this.props.num}
        recipeName={this.props.name}
        recipeIngredients={this.props.ingredients}
        saveChanges={this.props.saveChanges}
        index={this.props.num} />
    </div>
  </div>
        </div>
      );
  }
}

export default Recipe;