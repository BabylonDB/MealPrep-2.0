
/*package ch.zhaw.mealprep.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.model.Recipe;
import ch.zhaw.mealprep.repository.MealPlanRepository;
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
    public MealPlan createMealPlan(@RequestBody MealPlan mealPlan) {
        return mealPlanRepository.save(mealPlan);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MealPlan> updateMealPlan(@PathVariable String id, @RequestBody MealPlan mealPlanDetails) {
        return mealPlanRepository.findById(id).map(mealPlan -> {
            mealPlan.setName(mealPlanDetails.getName()); // Example setter
            return ResponseEntity.ok(mealPlanRepository.save(mealPlan));
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
*/