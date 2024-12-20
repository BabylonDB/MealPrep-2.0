package ch.zhaw.mealprep.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.model.Recipe;
import ch.zhaw.mealprep.repository.MealPlanRepository;
import ch.zhaw.mealprep.service.MealPlanService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mealplan")
public class MealPlanController {

    @Autowired
    private MealPlanRepository mealPlanRepository;

    @Autowired
    private MealPlanService mealPlanService;

    // Alle Meal Plans abrufen
    @GetMapping
    public List<MealPlan> getAllMealPlans() {
        return mealPlanRepository.findAll();
    }

    // Meal Plan nach ID abrufen
    @GetMapping("/{id}")
    public ResponseEntity<MealPlan> getMealPlanById(@PathVariable String id) {
        Optional<MealPlan> mealPlan = mealPlanRepository.findById(id);
        return mealPlan.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Meal Plan erstellen
    @PostMapping
    public ResponseEntity<MealPlan> createMealPlan(@RequestBody MealPlan mealPlan) {
        MealPlan savedMealPlan = mealPlanRepository.save(mealPlan);
        return new ResponseEntity<>(savedMealPlan, HttpStatus.CREATED);
    }

    // Meal Plan basierend auf Präferenzen generieren
    @PostMapping("/generate")
    public ResponseEntity<MealPlan> generateMealPlan(@RequestParam String preferences) {
        MealPlan mealPlan = mealPlanService.generateMealPlanForPreferences(preferences);
        return new ResponseEntity<>(mealPlan, HttpStatus.CREATED);
    }

    // Meal Plan aktualisieren
    @PutMapping("/{id}")
    public ResponseEntity<MealPlan> updateMealPlan(@PathVariable String id, @RequestBody MealPlan mealPlanDetails) {
        return mealPlanRepository.findById(id).map(existingMealPlan -> {
            existingMealPlan.setName(mealPlanDetails.getName());
            existingMealPlan.setDescription(mealPlanDetails.getDescription());
            existingMealPlan.setIngredients(mealPlanDetails.getIngredients());
            existingMealPlan.setRecipes(mealPlanDetails.getRecipes());

            MealPlan updatedMealPlan = mealPlanRepository.save(existingMealPlan);
            return new ResponseEntity<>(updatedMealPlan, HttpStatus.OK);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Rezept zu einem Meal Plan hinzufügen
    @PutMapping("/{mealPlanId}/addRecipe")
    public ResponseEntity<?> addRecipeToMealPlan(@PathVariable String mealPlanId, @RequestBody String recipeId) {
        Optional<MealPlan> mealPlanOptional = mealPlanRepository.findById(mealPlanId);
        if (mealPlanOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Meal Plan not found with ID: " + mealPlanId);
        }

        MealPlan mealPlan = mealPlanOptional.get();
        if (mealPlan.getRecipes().contains(recipeId)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Recipe already exists in Meal Plan.");
        }

        mealPlan.getRecipes().add(recipeId);
        MealPlan updatedMealPlan = mealPlanRepository.save(mealPlan);
        return ResponseEntity.ok(updatedMealPlan);
    }

    // Meal Plan löschen
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMealPlan(@PathVariable String id) {
        if (mealPlanRepository.existsById(id)) {
            mealPlanRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Rezepte zu einem bestimmten Meal Plan abrufen
    @GetMapping("/{mealPlanId}/recipes")
    public ResponseEntity<List<Recipe>> getRecipesForMealPlan(@PathVariable String mealPlanId) {
        try {
            List<Recipe> recipes = mealPlanService.getRecipesForMealPlan(mealPlanId);
            return ResponseEntity.ok(recipes);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}