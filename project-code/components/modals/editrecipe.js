import React from 'react';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: props.recipeName,
      recipeIngredients: props.recipeIngredients.join(',')};
  }
  handleInputChange = (e) => {
    var ingredientList = this.state.recipeIngredients;
    this.setState({recipeName: e.target.value, recipeIngredients: ingredientList});
  };
  handleTextareaChange = (e) => {
     var name = this.state.recipeName;
     this.setState({recipeName: name, recipeIngredients: e.target.value});
  };
  submitChanges = () => {
    var inputText = this.refs.input.value;
    var textareaText = this.refs.textarea.value;
    this.props.saveChanges(inputText, textareaText, this.props.index);
  };
  resetValue = () => {
     this.setState({recipeName: this.props.recipeName, recipeIngredients: this.props.recipeIngredients.join(',')});
  };
  render() {
   
    return (
        <div className="modal fade" id={this.props.id} >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Edit Recipe</h4>
              </div>
              <div className="modal-body">
               <h5>Recipe</h5>
               
        <input className='form-control col-md-12 col-sm-12 col-xs-12' type='text' placeholder='Recipe value' ref='input'  value={this.state.recipeName} onChange={this.handleInputChange} />
    
                <h5 className='space-top'>Ingredients</h5>
               <textarea className='form-control col-md-12 col-sm-12 col-xs-12' type='text' placeholder='Enter Ingredients, Seperated By Commas' ref='textarea' value={this.state.recipeIngredients} onChange={this.handleTextareaChange} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.submitChanges}>Edit recipe</button>
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetValue}>Close</button>
              </div>
            </div>
          </div>
        </div>);
  }
}

export default EditRecipe;
