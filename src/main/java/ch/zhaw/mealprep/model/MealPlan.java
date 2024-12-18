package ch.zhaw.mealprep.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Document("mealplan")
public class MealPlan {
    @Id
    private String id;

    @NonNull
    private String name; // Name des Meal Plans

    private String description; // Beschreibung des Meal Plans

    private List<String> ingredients; // Liste der Zutaten wie im Recipe-Modell

    private List<String> recipes; // Liste von Rezept-IDs
}
