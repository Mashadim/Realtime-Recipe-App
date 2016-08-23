import React, { Component, PropTypes } from 'react';
import RecipeCardCheckbox from './RecipeCardCheckbox';
import RecipeCardRating from '../components/RecipeCardRating';
import RecipeCardExtraInfo from '../components/RecipeCardExtraInfo';

export class RecipeCardInfo extends Component {
	render() {
		const { recipeName, recipeRating, recipeCookTime, recipeType } = this.props;
		
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
						<RecipeCardCheckbox recipeName={recipeName} />
					</div>
				</div>
			</div>
		)
	}
};

RecipeCardInfo.protoType = {
	recipeName: React.PropTypes.string.isRequired,
	recipeRating: React.PropTypes.string.isRequired,
	recipeCookTime: React.PropTypes.string.isRequired,
	recipeType: React.PropTypes.string.isRequired
};

export default RecipeCardInfo;