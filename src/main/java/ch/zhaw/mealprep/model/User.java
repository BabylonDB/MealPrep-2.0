
package ch.zhaw.mealprep.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String name;
    private String dietaryPreferences; // e.g., "vegan", "keto"
    private Integer portionSize; // Default portion size

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<MealPlan> mealPlans;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<ShoppingList> shoppingLists;
}
