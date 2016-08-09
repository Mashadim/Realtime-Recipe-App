import React, { Component } from 'react';
import RecipeCardRating from './RecipeCardRating';
import RecipeCardExtraInfo from './RecipeCardExtraInfo';
import RecipeCardCheckbox from './RecipeCardCheckbox';

export class RecipeCardInfo extends Component {
	render() {
		const { recipeName, recipeRating, recipeCookTime, recipeType, recipesChecked, handleRecipeChecked } = this.props;
		return (
			<div className='recipeCardInfo'>
				<div className='recipeName general-font general-padding'> 
          {recipeName} 
        </div>
				<div className="row">
  					<div className="col-md-6">
						<RecipeCardRating recipeRating={recipeRating} />
						<RecipeCardExtraInfo recipeCookTime={recipeCookTime} recipeType={recipeType} />
					</div>
  					<div className="col-md-6">
						<RecipeCardCheckbox recipeName={recipeName} handleRecipeChecked={handleRecipeChecked} recipesChecked={recipesChecked} />
					</div>
				</div>
			</div>
		)
	}
}

export default RecipeCardInfo;