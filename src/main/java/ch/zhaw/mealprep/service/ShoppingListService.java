package ch.zhaw.mealprep.service;

import ch.zhaw.mealprep.model.ShoppingList;
import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.repository.MealPlanRepository;
import ch.zhaw.mealprep.repository.RecipeRepository;
import ch.zhaw.mealprep.repository.ShoppingListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingListService {

    @Autowired
    private ShoppingListRepository shoppingListRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private MealPlanRepository mealPlanRepository;

    /**
     * Fetch all shopping lists.
     * @return List of all shopping lists.
     */
    public List<ShoppingList> getAllShoppingLists() {
        return shoppingListRepository.findAll();
    }

    /**
     * Fetch a shopping list by its ID.
     * @param id Shopping list ID.
     * @return ShoppingList object or null if not found.
     */
    public ShoppingList getShoppingListById(String id) {
        return shoppingListRepository.findById(id).orElse(null);
    }

    /**
     * Create a new shopping list.
     * @param shoppingList ShoppingList object to create.
     * @return Created ShoppingList object.
     */
    public ShoppingList createShoppingList(ShoppingList shoppingList) {
        return shoppingListRepository.save(shoppingList);
    }

    /**
     * Update an existing shopping list.
     * @param id ID of the shopping list to update.
     * @param shoppingListDetails ShoppingList object with updated details.
     * @return Updated ShoppingList object or null if not found.
     */
    public ShoppingList updateShoppingList(String id, ShoppingList shoppingListDetails) {
        return shoppingListRepository.findById(id).map(existingList -> {
            existingList.setName(shoppingListDetails.getName());
            existingList.setIngredients(shoppingListDetails.getIngredients());
            return shoppingListRepository.save(existingList);
        }).orElse(null);
    }

    /**
     * Delete a shopping list by its ID.
     * @param id ID of the shopping list to delete.
     * @return True if deleted, false otherwise.
     */
    public boolean deleteShoppingList(String id) {
        if (shoppingListRepository.existsById(id)) {
            shoppingListRepository.deleteById(id);
            return true;
        }
        return false;
    }

    /**
     * Generate a shopping list for a given MealPlan.
     * @param mealPlanId ID of the MealPlan.
     * @return List of unique ingredients from the associated recipes.
     */
    public List<String> generateShoppingList(String mealPlanId) {
        // Fetch the MealPlan by ID
        MealPlan mealPlan = mealPlanRepository.findById(mealPlanId)
                .orElseThrow(() -> new RuntimeException("Meal Plan not found with ID: " + mealPlanId));

        // Use aggregation to fetch ingredients based on Recipe IDs
        return recipeRepository.aggregateShoppingList(mealPlan.getRecipes());
    }
}
