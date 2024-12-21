# Anforderungen

## Use-Case-Diagramm
![Use-Case-Diagramm](\figures\Use_Case_diagramm.drawio.png)

## Use-Case-Beschreibung

### **1. User**
- **Registrierter Benutzer** kann:
  - Präferenzen eingeben.
  - Shoppinglisten ansehen.
  - Rezepte lesen.
  - MealPlans auswählen und erstellen.
- **Unregistrierter Benutzer** kann:
  - Sich registrieren.

### **2. Admin**
- **Zusätzliche Berechtigungen**:
  - Benutzer verwalten (Hinzufügen, Bearbeiten, Löschen).
  - Rezepte erstellen.
  - MealPlans erstellen oder verwalten.
  - Rezepte zu MealPlans zuweisen.

## Prozesse und Beziehungen

### **1. Registrierung und Präferenzen**
- **Unregistrierter Benutzer**:
  - Kann sich registrieren.
  - Kann nach der Registrierung Präferenzen eingeben.

### **2. Shoppinglisten und Rezepte**
- **Registrierter Benutzer**:
  - Kann Einkaufslisten einsehen, die basierend auf MealPlans generiert werden.
  - Kann Rezepte ansehen und auswählen.

### **3. MealPlan-Management**
- **Benutzer und Admin** können:
  - MealPlans auswählen.
  - Rezepte zu MealPlans zuweisen.
  - MealPlans verwalten (z. B. bearbeiten oder löschen).

### **4. Admin-spezifische Funktionen**
- **Admin** hat zusätzliche Rechte:
  - Verwalten von Benutzern (z. B. Benutzer hinzufügen, bearbeiten, löschen).
  - Erstellen neuer Rezepte.
  - Zuweisen von Rezepten zu MealPlans.

## Zusammenfassung
Das Diagramm zeigt die Interaktionen zwischen den **Akteuren (User, Admin)** und den Prozessen der Anwendung:
- **Benutzer** können Kernfunktionen wie Rezepte lesen und MealPlans verwalten nutzen.
- **Administratoren** haben erweiterte Rechte zur Verwaltung von Benutzern, Rezepten und MealPlans.





## Fachliches Datenmodell
![ER-Modell](\figures\ER-Diagramm.drawio.png)

### Erläuterungen
### User
- **Attribute**:
  - `id: String` (Primärschlüssel)
  - `name: String`
  - `email: String`
  - `password: String`
  - `preferences: String`
- **Beziehungen**:
  - Ein User kann mehrere `ShoppingLists` und `MealPlans` besitzen (**1:N**).

---

### MealPlan
- **Attribute**:
  - `id: String` (Primärschlüssel)
  - `name: String`
  - `description: String`
  - `ingredients: Liste von Strings`
  - `recipes: Liste von Strings`
- **Beziehungen**:
  - Ein `MealPlan` enthält mehrere `Recipes` (**1:N**).
  - Ein `MealPlan` gehört zu einem `User` (**N:1**).

---

### Recipe
- **Attribute**:
  - `id: String` (Primärschlüssel)
  - `name: String`
  - `ingredients: Liste von Strings`
  - `calories: Integer`
- **Beziehungen**:
  - Ein `Recipe` ist Teil eines `MealPlan` (**N:1**).
  - Zutaten aus `Recipes` können in mehreren `ShoppingLists` verwendet werden (**N:M**).

---

### ShoppingList
- **Attribute**:
  - `id: String` (Primärschlüssel)
  - `name: String`
  - `ingredients: Liste von Strings`
- **Beziehungen**:
  - Eine `ShoppingList` enthält Zutaten, die in `Recipes` vorkommen (**N:M**).
  - Eine `ShoppingList` gehört zu einem `User` (**N:1**).

---

## Beziehungen zwischen Entitäten

1. **User - MealPlan**:
   - **Beziehung**: **1:N**
   - Ein `User` kann mehrere `MealPlans` besitzen.

2. **User - ShoppingList**:
   - **Beziehung**: **1:N**
   - Ein `User` kann mehrere `ShoppingLists` besitzen.

3. **MealPlan - Recipe**:
   - **Beziehung**: **1:N**
   - Ein `MealPlan` enthält mehrere `Recipes`.

4. **Recipe - ShoppingList**:
   - **Beziehung**: **N:M**
   - Zutaten aus `Recipes` können in mehreren `ShoppingLists` verwendet werden.


## Zustandsdiagramm
![Zustandsdiagramm](\figures\UML-Zustandsdiagramm.drawio.png)

### ## **Recipe (Rezeptverwaltung)**

Die **Rezeptverwaltung** beginnt mit dem Erfassen von Rezeptdaten, bei dem Benutzer Attribute wie Name, Zutaten und Zubereitung in einem Formular eingeben. Nach der Validierung und Speicherung wechselt der Zustand zu **"Rezept gespeichert"**, wodurch das Rezept in der Liste sichtbar wird. Änderungen an den Rezeptattributen führen zum Zustand **"Rezept geändert"**, während das Löschen eines Rezepts den Zustand **"Rezept gelöscht"** erreicht. Darüber hinaus können Rezepte einem MealPlan hinzugefügt werden, was den Zustand **"Rezept hinzugefügt"** auslöst. Die Übergänge zwischen diesen Zuständen werden durch Ereignisse wie **"Rezept wird gespeichert"**, **"Rezept wird geändert"** oder **"Rezept wird gelöscht"** initiiert. Guards wie die **Validierung der Eingabedaten** oder das **Prüfen auf Duplikate** stellen sicher, dass nur valide und konsistente Daten verarbeitet werden.

---

## **User (Benutzerverwaltung)**

Die **Benutzerverwaltung** startet mit dem Erfassen von Benutzerdaten, wobei Informationen wie Name, E-Mail und Passwort eingegeben werden. Nach der Validierung und Speicherung gelangt der Prozess in den Zustand **"User gespeichert"**, der einen neuen Benutzer anlegt. Änderungen an bestehenden Benutzerdaten führen zum Zustand **"User geändert"**, wobei Guards wie die **Validierung der Benutzerdaten** oder eine **Rollenprüfung** sicherstellen, dass nur autorisierte Benutzer Änderungen vornehmen können. Die Übergänge zwischen diesen Zuständen werden durch Ereignisse wie **"User-Daten werden erfasst"**, **"User speichern"** oder **"User ändern"** ausgelöst, was eine strukturierte und sichere Verarbeitung der Benutzerverwaltung ermöglicht.

---




## Mockup des UI
![UI-Mockup](\figures\Website_mock_1.png)
![UI-Mockup](\figures\Website_mock_2.png)
![UI-Mockup](\figures\Website_mock_3.png)
![UI-Mockup](\figures\Website_mock_4.png)
![UI-Mockup](\figures\Website_mock_5.png)
