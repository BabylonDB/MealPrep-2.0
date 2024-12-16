package ch.zhaw.mealprep.controller;

import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.repository.MealPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/mealplan")
public class MealPlanController {

    @Autowired
    private MealPlanRepository mealPlanRepository;

    // Beispielmethode: Alle MealPlans zurückgeben
    @GetMapping("/")
    public List<MealPlan> getAllMealPlans() {
        return mealPlanRepository.findAll();
    }

    // Beispielmethode: Einen MealPlan nach ID zurückgeben
    @GetMapping("/{id}")
    public ResponseEntity<MealPlan> getMealPlanById(@PathVariable("id") String id) {
        Optional<MealPlan> mealPlan = mealPlanRepository.findById(id);
        if (mealPlan.isPresent()) {
            return ResponseEntity.ok(mealPlan.get());
        }
        return ResponseEntity.notFound().build();
    }

    // Beispielmethode: Einen MealPlan speichern
    @PostMapping("/")
    public MealPlan createMealPlan(@RequestBody MealPlan mealPlan) {
        return mealPlanRepository.save(mealPlan);
    }
}