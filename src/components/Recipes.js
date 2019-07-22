import React from 'react';

const Recipes = ({ recipe }) => {
    return (
        <li className="recipeItem">
            <div className="recipeItem__header">
                <img className="recipeItem__Img" src={recipe.thumbnail} alt={recipe.title}/>
                <h3 className="recipeItem__title">{recipe.title}</h3>
            </div>

            <div className="recipeItem__content">
                <p className="recipeItem__ingredients">{recipe.ingredients}</p>
                <a className="recipeItem__link" href={recipe.href}>
                    <p className="recipeItem__moreTxt">More about</p>
                </a>
            </div>
        </li>
    )
}

export default Recipes
