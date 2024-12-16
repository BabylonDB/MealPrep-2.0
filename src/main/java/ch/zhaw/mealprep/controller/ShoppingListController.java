package ch.zhaw.mealprep.controller;

import ch.zhaw.mealprep.model.ShoppingList;
import ch.zhaw.mealprep.repository.ShoppingListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/shoppinglist")
public class ShoppingListController {

    @Autowired
    private ShoppingListRepository shoppingListRepository;

    @GetMapping("/")
    public List<ShoppingList> getAllShoppingLists() {
        return shoppingListRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShoppingList> getShoppingListById(@PathVariable("id") String id) {
        Optional<ShoppingList> shoppingList = shoppingListRepository.findById(id);
        if (shoppingList.isPresent()) {
            return ResponseEntity.ok(shoppingList.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/")
    public ShoppingList createShoppingList(@RequestBody ShoppingList shoppingList) {
        return shoppingListRepository.save(shoppingList);
    }
}