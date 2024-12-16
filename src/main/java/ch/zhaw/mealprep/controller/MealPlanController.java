package ch.zhaw.mealprep.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ch.zhaw.mealprep.model.*;
import ch.zhaw.mealprep.repository.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mealplan")
public class MealPlanController {

    @Autowired
    private MealPlanRepository mealPlanRepository;

    @GetMapping
    public List<MealPlan> getAllMealPlans() {
        return mealPlanRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MealPlan> getMealPlanById(@PathVariable String id) {
        Optional<MealPlan> mealPlan = mealPlanRepository.findById(id);
        return mealPlan.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MealPlan> createMealPlan(@RequestBody MealPlan mealPlan) {
        MealPlan savedMealPlan = mealPlanRepository.save(mealPlan);
        return new ResponseEntity<>(savedMealPlan, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MealPlan> updateMealPlan(@PathVariable String id, @RequestBody MealPlan mealPlanDetails) {
        return mealPlanRepository.findById(id).map(mealPlan -> {
            mealPlan.setUserId(mealPlanDetails.getUserId());
            mealPlan.setRecipeId(mealPlanDetails.getRecipeId());
            mealPlan.setDate(mealPlanDetails.getDate());
            MealPlan updatedMealPlan = mealPlanRepository.save(mealPlan);
            return new ResponseEntity<>(updatedMealPlan, HttpStatus.OK);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMealPlan(@PathVariable String id) {
        if (mealPlanRepository.existsById(id)) {
            mealPlanRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}