# PolyQuiz 🎯

Plateforme interactive de quiz chronométrés développée avec React, dans le cadre du TP d'Ingénierie Front-End Avancée — École Nationale Supérieure Polytechnique de Maroua.

---

## 📋 Description

PolyQuiz est une application de compétition intellectuelle proposant des quiz sur trois thématiques : les sports mécaniques (F1, MotoGP), le basketball (NBA) et la culture japonaise (Manga/Anime). Le joueur saisit son pseudo, répond à des questions en temps limité (60 secondes) et consulte ses résultats en fin de partie.

---

## 🚀 Technologies utilisées

- **React 18** — bibliothèque UI
- **Vite** — bundler et serveur de développement
- **React Router DOM v6** — gestion des routes et protection des pages
- **Context API** — partage global du pseudo et du score
- **Hooks avancés** — `useReducer`, `useRef`, `useMemo`, hook personnalisé `useFetch`

---

## 📁 Structure du projet

```
polyquiz/
├── public/
│   └── questions.json        # Base de données des questions (15 questions)
├── src/
│   ├── context/
│   │   └── UserContext.jsx   # Contexte global (pseudo + meilleur score)
│   ├── hooks/
│   │   └── useFetch.js       # Hook personnalisé pour les appels réseau
│   ├── components/
│   │   └── ProtectedRoute.jsx # Garde de route (redirige si pas de pseudo)
│   ├── pages/
│   │   ├── Home.jsx          # Page d'accueil / saisie du pseudo
│   │   ├── QuizEngine.jsx    # Moteur du quiz (useReducer + chronomètre)
│   │   └── Results.jsx       # Page de résultats (useMemo)
│   ├── App.jsx               # Routage principal
│   └── main.jsx              # Point d'entrée (avec UserProvider)
```

---

## ⚙️ Installation et lancement

### Prérequis

- Node.js >= 18
- npm >= 9

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/barka-eben/PolyQuiz.git
cd polyquiz

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

---

## 🏗️ Architecture et jalons

### Jalon 1 — Custom Hook `useFetch` (3 pts)

Le hook `useFetch(url)` abstrait toute la logique réseau. Il expose trois états : `data`, `loading` et `error`, permettant aux composants de se concentrer uniquement sur l'affichage.

```js
const { data, loading, error } = useFetch('/questions.json');
```

### Jalon 2 — Context API (4 pts)

`UserContext.jsx` fournit un contexte global contenant le pseudo du joueur et son meilleur score. Le composant `<UserProvider>` enveloppe toute l'application dans `main.jsx`, éliminant le props drilling entre les pages.

### Jalon 3 — Routes protégées (4 pts)

Le composant `<ProtectedRoute>` interroge le `UserContext`. Si aucun pseudo n'est défini, l'utilisateur est automatiquement redirigé vers `/` via `<Navigate>`. Les routes `/quiz` et `/resultats` sont obligatoirement wrappées par ce composant.

```
/           → Home (libre)
/quiz       → QuizEngine (protégée)
/resultats  → Results (protégée)
```

### Jalon 4 — Machine à état avec `useReducer` (5 pts)

Le composant `QuizEngine.jsx` utilise un `quizReducer` externe gérant trois actions :

| Action | Effet |
|---|---|
| `START_QUIZ` | Initialise l'état du jeu |
| `ANSWER_QUESTION` | Vérifie la réponse, incrémente le score, passe à la question suivante |
| `FINISH_QUIZ` | Termine la partie et sauvegarde le score |

### Jalon 5 — Performance avec `useRef` et `useMemo` (4 pts)

- **`useRef`** — L'identifiant du `setInterval` du compte à rebours (60 s) est stocké dans une ref afin d'éviter tout re-rendu inutile. Quand le temps atteint zéro, `clearInterval` est appelé et l'action `FINISH_QUIZ` est dispatchée.
- **`useMemo`** — Sur la page `/resultats`, le calcul du ratio de bonnes réponses est mémoïsé pour ne s'exécuter qu'une seule fois, même si d'autres parties du composant se rafraîchissent (ex. changement de thème).

---

## 🎮 Fonctionnement du quiz

1. Le joueur arrive sur la page d'accueil et saisit son pseudo.
2. Il est redirigé vers `/quiz` où 15 questions lui sont posées.
3. Un chronomètre de 60 secondes démarre automatiquement.
4. À chaque réponse, le score est mis à jour en temps réel.
5. En fin de partie (fin des questions ou temps écoulé), il est redirigé vers `/resultats`.
6. La page de résultats affiche le score final et le ratio de bonnes réponses.


---

## 👤 Auteur

Projet réalisé dans le cadre du cours **Ingénierie Front-End Avancée**  
Enseignant : **MANAODA DEUHWE Yves Hermann**  
Niveau 3 — Unité de Spécialité : IDE & Frameworks  
École Nationale Supérieure Polytechnique de Maroua — Année académique 2025-2026