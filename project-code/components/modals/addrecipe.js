import React from 'react';

class AddRecipe extends React.Component {
  clearInputFields = () => {
     this.refs.input.value = '';
     this.refs.textarea.value = '';
  };
  saveRecipe = () => {
     this.clearInputFields();
     this.props.addRecipe();
  };
  render() {
  
  return (
        <div className="modal add-recipe-modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Add a Recipe</h4>
              </div>
              <div className="modal-body">
               <h5>Recipe</h5>
               <input className='form-control col-md-12 col-sm-12 col-xs-12' type='text' placeholder='Recipe name' ref='input' onChange={this.props.addName} />
                <h5 className='space-top'>Ingredients</h5>
               <textarea className='form-control col-md-12 col-sm-12 col-xs-12' type='text' placeholder='Enter Ingredients, Seperated By Commas' ref='textarea' onChange={this.props.addIngredients} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveRecipe}>Add recipe</button>
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.clearInputFields}>Close</button>
              </div>
            </div>
          </div>
        </div>);
  }
}

export default AddRecipe;