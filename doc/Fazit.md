# Fazit zum Projektstand

## Stand der Implementierung

### **1. Technologische Basis**
- **Backend-Framework**: Die Anwendung basiert auf dem **Spring Boot Framework** und bietet eine robuste Architektur.
- **Frontend-Technologie**: Mit **Svelte** wurde eine moderne, reaktive Benutzeroberfläche umgesetzt.
- **Datenpersistenz**: Die Anwendung verwendet **MongoDB auf Atlas**, einschließlich:
  - **Spezielle Aggregationen**, die leistungsstarke Datenanalysen ermöglichen, z. B.:
    - Gruppierungen und Berechnungen von Daten.
    - Filtern und Verknüpfen (Lookups) zwischen Entitäten.
  - Diese Aggregationen verbessern die Performance und erlauben komplexe Abfragen.
- **Deployment**: Die Anwendung ist erfolgreich auf **Azure App Service** bereitgestellt.

---

### **2. Qualitätssicherung**
- **Tests**:
  - Grundlegende **Unit-Tests** mit **JUnit** sind vorhanden, wobei **Mockito** sinnvoll verwendet wurde.
  - **Integrationstests** existieren für die Endpoints und basieren auf **SpringBootTests** und **MockMvc**.
  - **Verbesserungspotenzial**: Die Tests sind eher primitiv als umfassend. Eine breitere Abdeckung und detailliertere Szenarien sollten in Betracht gezogen werden, um die Qualitätssicherung zu stärken.

---

### **3. Architektur und Struktur**
- Die Anwendung folgt einer klaren **Schichtenarchitektur** mit getrennten Ordnern für:
  - **Modelle**
  - **Controller**
  - **Repositories**
  - **Services**
- Das Datenmodell umfasst mindestens **drei Entitätstypen** mit folgenden Eigenschaften:
  - Beziehungen zwischen den Entitäten werden abgebildet.
  - Mindestens eine Entität durchläuft **mehrere Zustände**.
  - Mindestens eine Entität ist einem Benutzer zugeordnet und kann nur von diesem bearbeitet werden.

---

### **4. Authentifizierung und Berechtigungen**
- **Login-System**: Die Authentifizierung basiert auf **Auth0**.
- **Benutzerrollen**:
  - Mindestens zwei Rollen mit unterschiedlichen Berechtigungen.
  - Öffentliche und geschützte Bereiche sind klar voneinander getrennt.

---

### **5. Funktionalität**
- Die Anwendung bietet **CRUD-Operationen** und zusätzliche **Service-Endpunkte**.
- Das Backend greift auf mindestens ein **Drittsystem** zu.

---

### **6. Dokumentation und Arbeitsweise**
- Das Projekt ist auf **GitHub** veröffentlicht und weist gut dokumentierte **Commits**, **Issues** und **Sprints** auf.

---

## Herausforderungen
- **Branch-Fehler**: Ein falscher Branch wurde erstellt, wodurch das Projekt momentan auf dem **Login-Branch** statt auf dem Default-Branch liegt. Dieser Fehler sollte behoben werden.
- **Tests**: Die vorhandenen Tests sind funktional, aber nicht ausreichend umfassend. Eine stärkere Testabdeckung sollte angestrebt werden, um die Stabilität und Zuverlässigkeit zu erhöhen.

---

# Nächste Schritte

Das Projekt hat bereits eine solide Basis geschaffen, und die nächsten Schritte bieten spannende Möglichkeiten, die Funktionalität und Benutzererfahrung weiter auszubauen. Im Folgenden sind die geplanten Erweiterungen und ihre Vorteile zusammengefasst:

---

## **1. Verknüpfung von Auth0-Benutzern mit Daten**
- **Ziel**: Benutzer sollen individuelle Präferenzen speichern können, die direkten Einfluss auf MealPlans haben.
- **Beschreibung**:
  - Präferenzen wie Ernährungsarten (vegetarisch, vegan), Allergien oder Kalorienlimits können hinterlegt werden.
  - Diese Präferenzen steuern dynamisch die Auswahl und Darstellung passender MealPlans.
  - Die Verknüpfung der Auth0-Benutzer mit der Datenbank ermöglicht eine personalisierte Benutzererfahrung.
- **Nutzen**:
  - Bietet einen Mehrwert durch individuelle Anpassungen.
  - Stärkt die Verbindung zwischen Benutzer und Anwendung durch personalisierte Inhalte.

---

## **2. Integration der Google Maps API**
- **Ziel**: Anzeige von Supermärkten in der Nähe und dem aktuellen Benutzerstandort.
- **Beschreibung**:
  - Die Google Maps API wird genutzt, um den aktuellen Standort des Benutzers zu erfassen.
  - Nahegelegene Supermärkte werden auf einer Karte mit Markern dargestellt.
  - Die Funktion ermöglicht eine einfache Orientierung und Planung für den Einkauf.
- **Nutzen**:
  - Erhöht den Komfort für den Benutzer durch Echtzeitinformationen.
  - Verbessert die Integration von Einkaufslisten und physischen Standorten.

---

## **3. Anbindung an Supermärkte für Preisvergleiche**
- **Ziel**: Preisvergleich von Lebensmitteln aus verschiedenen Supermärkten.
- **Beschreibung**:
  - APIs oder Datenquellen verschiedener Supermärkte (z. B. Edeka, REWE, Lidl) werden angebunden.
  - Preise für Produkte können in der Anwendung verglichen werden, um kosteneffiziente Entscheidungen zu treffen.
  - Die Funktion könnte auch alternative Produkte mit ähnlichen Eigenschaften vorschlagen.
- **Nutzen**:
  - Bietet Transparenz über Preise und hilft Benutzern, Geld zu sparen.
  - Ermöglicht intelligente Einkaufsentscheidungen durch umfassende Informationen.

---

## **4. Einführung einer Budget-Funktion**
- **Ziel**: Benutzer können ein Budget festlegen, das bei der Planung von MealPlans und Einkaufslisten berücksichtigt wird.
- **Beschreibung**:
  - Benutzer geben ein maximales Budget ein, das für einen Zeitraum (z. B. Woche) gilt.
  - MealPlans und Einkaufslisten werden darauf optimiert, die Kosten innerhalb des Budgets zu halten.
  - Überschreitungen des Budgets werden mit Warnhinweisen angezeigt.
- **Nutzen**:
  - Hilft Benutzern, finanzielle Ziele zu erreichen.
  - Bietet zusätzliche Kontrolle über Ausgaben und verbessert die Planung.

---



