/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if(remainingTime === undefined) return "You forgot to set the timer."
  if(remainingTime === 0) return "Lasagna is done."
  return "Not done, please wait."
}

export function preparationTime(layers, preparationTime = 2) {
  return layers.length * preparationTime
}

export function quantities(layers) {
  let quantities = {
    noodles: 0,
    sauce: 0
  }

  layers.forEach(q => {
    if(q === "sauce") {
      quantities.sauce = quantities.sauce + 0.2
    } 
    if(q === 'noodles') {
      quantities.noodles = quantities.noodles + 50
    }
  })

  return quantities
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, people) {
  let newRecipe = {}
  for (let item in recipe) {
    newRecipe[item] = (recipe[item] / 2) * people
  }  

  return newRecipe
}