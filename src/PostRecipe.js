
import React from "react";

  //takes in the recipe information from App.js and the deleteRecipe function in App.js
  function PostRecipe({recipes, deleteRecipe}) {
    //useing map to make the rows, takeing in deconstructed name, cuisine type, photo html, ingredients, and instructions from the recipeData array, or anyy other array
    return recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => {
       return ( 
        <tr key={index}
        //creating an index so that we can referance it later for deletRecipe, also because react likes haveing unique indexs
        >
          <td
          //name cell
          //takes the current name from the current indexed iteration recipes object
          >{name}</td>
          <td
          //cuisine cell
          //does the same as above but for cuisine
          >{cuisine}</td>
          <td
          //img cell

          //does the same as above but formated for an img
          ><img className="scale-down" src={photo} alt="Ignore"/></td>
          <td className="content_td"
          //ingrediants cell
          ><p
          //they are then inserted as paragraphs for the same reason
          >{ingredients}</p></td>
          <td className="content_td"
          //preparation cell
          ><p>{preparation}</p></td>
          <td><button
          //the delete button, has an onClick function to referance deleteRecipe function, which itself has the key index of the current recipe so it can remove it
          name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
        </tr> );
    })
  }
export default PostRecipe;