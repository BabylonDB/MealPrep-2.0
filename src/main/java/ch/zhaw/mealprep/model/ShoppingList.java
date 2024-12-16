
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
@Document("shoppinglist")
public class ShoppingList {
    @Id
    private String id;
    @NonNull
    private String name;
    private List<String> items;
    private String status;
}