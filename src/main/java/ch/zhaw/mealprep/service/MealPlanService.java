package ch.zhaw.mealprep.service;

import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.model.Recipe;
import ch.zhaw.mealprep.repository.MealPlanRepository;
import ch.zhaw.mealprep.repository.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MealPlanService {

    @Autowired
    private MealPlanRepository mealPlanRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    
    public List<Recipe> getRecipesForMealPlan(String mealPlanId) {
        MealPlan mealPlan = mealPlanRepository.findById(mealPlanId)
                .orElseThrow(() -> new RuntimeException("Meal Plan not found with ID: " + mealPlanId));

        return recipeRepository.findByIdIn(mealPlan.getRecipes());
    }

    
    public MealPlan generateMealPlanForPreferences(String preferences) {
        
        List<Recipe> recipes = recipeRepository.findRecipesByPreferences(preferences);
        if (recipes.isEmpty()) {
            throw new RuntimeException("No recipes found for preferences: " + preferences);
        }

        
        MealPlan mealPlan = new MealPlan();
        mealPlan.setName("Meal Plan for Preferences: " + preferences);
        mealPlan.setDescription("Generated Meal Plan based on user preferences");
        mealPlan.setRecipes(recipes.stream()
                .map(Recipe::getId)
                .collect(Collectors.toList()));

        
        return mealPlanRepository.save(mealPlan);
    }


    public void addRecipeToMealPlan(String mealPlanId, String recipeId) {
        // 1. Suche den MealPlan anhand der ID
        MealPlan mealPlan = mealPlanRepository.findById(mealPlanId)
                .orElseThrow(() -> new RuntimeException("Meal Plan not found with ID: " + mealPlanId));
    
        // 2. Überprüfe, ob das Rezept bereits im MealPlan existiert
        if (mealPlan.getRecipes().contains(recipeId)) {
            throw new RuntimeException("Recipe already exists in Meal Plan.");
        }
    
        // 3. Überprüfe, ob das Rezept existiert
        boolean recipeExists = recipeRepository.existsById(recipeId);
        if (!recipeExists) {
            throw new RuntimeException("Recipe not found with ID: " + recipeId);
        }
    
        // 4. Füge das Rezept dem MealPlan hinzu
        mealPlan.getRecipes().add(recipeId);
    
        // 5. Speichere den aktualisierten MealPlan
        mealPlanRepository.save(mealPlan);
    }
}
