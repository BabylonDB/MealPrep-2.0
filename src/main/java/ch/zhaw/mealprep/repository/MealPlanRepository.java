package ch.zhaw.mealprep.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ch.zhaw.mealprep.model.Recipe;

@Repository
public interface MealPlanRepository extends MongoRepository<Recipe, String> {}
