package ch.zhaw.mealprep.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ch.zhaw.mealprep.model.MealPlan;
import java.util.List;

@Repository
public interface MealPlanRepository extends MongoRepository<MealPlan, String> {
    
}
