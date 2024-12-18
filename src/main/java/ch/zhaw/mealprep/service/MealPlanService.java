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

    // Rezepte für einen MealPlan abrufen
    public List<Recipe> getRecipesForMealPlan(String mealPlanId) {
        MealPlan mealPlan = mealPlanRepository.findById(mealPlanId)
                .orElseThrow(() -> new RuntimeException("Meal Plan not found with ID: " + mealPlanId));

        return recipeRepository.findByIdIn(mealPlan.getRecipes());
    }

    // MealPlan basierend auf Benutzerpräferenzen generieren
    public MealPlan generateMealPlanForPreferences(String preferences) {
        // 1. Rezepte basierend auf Präferenzen abrufen
        List<Recipe> recipes = recipeRepository.findRecipesByPreferences(preferences);
        if (recipes.isEmpty()) {
            throw new RuntimeException("No recipes found for preferences: " + preferences);
        }

        // 2. MealPlan erstellen
        MealPlan mealPlan = new MealPlan();
        mealPlan.setName("Meal Plan for Preferences: " + preferences);
        mealPlan.setDescription("Generated Meal Plan based on user preferences");
        mealPlan.setRecipes(recipes.stream()
                .map(Recipe::getId)
                .collect(Collectors.toList()));

        // 3. MealPlan speichern
        return mealPlanRepository.save(mealPlan);
    }
}
