import React from 'react';
import Recipes from "./Recipes";
import Spinner from '../components/Spinner';
import RecipePagination from "./RecipePagination";


const RecipesList = ({ recipes, loading, searchPagination, onPageChange }) => {
    if (recipes.length === 0) {
        return null;
    }

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div className="container recipeList">
                <ul className="recipeList__itemList">
                    {recipes.map( (recipe, i) => (
                        <Recipes key={i} recipe={recipes[i]} />
                    ))}
                </ul>
                <div className="pagination"></div>
                <RecipePagination
                    searchPagination={searchPagination}
                    onPageChange={onPageChange}
                />
            </div>
        )
    }
}

export default RecipesList