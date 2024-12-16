
package ch.zhaw.mealprep.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Document("recipe")
public class Recipe {
    @Id
    private String id;
    @NonNull
    private String name;
    private List<String> ingredients;
    private Integer calories;
    private String tags;
    private String instructions;
}
