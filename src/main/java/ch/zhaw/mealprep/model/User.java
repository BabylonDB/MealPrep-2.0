
package ch.zhaw.mealprep.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Document("user")
public class User {
    @Id
    private String id;
    @NonNull
    private String name;
    @NonNull
    private String email;
    private String password;
    private String preferences;
}
