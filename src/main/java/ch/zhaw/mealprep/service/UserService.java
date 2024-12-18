package ch.zhaw.mealprep.service;

import ch.zhaw.mealprep.model.User;
import ch.zhaw.mealprep.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Benutzer anhand der E-Mail abrufen
    public User getUserByEmail(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new RuntimeException("User not found with email: " + email);
        }
    }
}
