
package ch.zhaw.mealprep.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
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
    private String userId; // Referenz auf User-ID
    @NonNull
    private String recipeId; // Referenz auf Recipe-ID
    private LocalDate date; // Datum des Essens

    
    
}