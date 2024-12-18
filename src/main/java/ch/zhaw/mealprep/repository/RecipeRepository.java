package ch.zhaw.mealprep.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ch.zhaw.mealprep.model.Recipe;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {

    // Rezepte anhand einer Liste von IDs abrufen
    List<Recipe> findByIdIn(List<String> ids);

    // Rezepte nach Benutzerpräferenzen filtern
    @Aggregation(pipeline = {
        "{ '$match': { '$or': [ " +
        "   { 'name': { '$regex': ?0, '$options': 'i' } }, " +
        "   { 'ingredients': { '$regex': ?0, '$options': 'i' } } " +
        "] } }"
    })
    List<Recipe> findRecipesByPreferences(String preferences);

    // Shoppingliste basierend auf einem MealPlan abrufen
    @Aggregation(pipeline = {
        "{ '$match': { '_id': { '$in': ?0 } } }", // Match Recipes by IDs
        "{ '$unwind': '$ingredients' }",         // Ingredients auflösen
        "{ '$group': { '_id': null, 'shoppingList': { '$addToSet': '$ingredients' } } }" // Zutaten sammeln
    })
    List<String> aggregateShoppingList(List<String> recipeIds);
}
