
package ch.zhaw.mealprep.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ElementCollection
    private List<String> ingredients; // List of ingredients

    private Integer calories; // Calories per portion
    private String tags; // e.g., "vegan", "low carb"

    @Column(length = 1000)
    private String instructions; // Preparation steps
}
