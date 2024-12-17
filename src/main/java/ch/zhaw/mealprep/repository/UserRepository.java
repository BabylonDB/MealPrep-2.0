package ch.zhaw.mealprep.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ch.zhaw.mealprep.model.*;

@Repository
public interface UserRepository extends MongoRepository<User, String> {}