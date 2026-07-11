# Chef Claude – AI Recipe Generator

Chef Claude is an AI-powered recipe generator built with **React** that creates personalized recipes based on user-provided ingredients. 
This project focuses on building dynamic and interactive user interfaces while learning React fundamentals, state management, form handling, 
component communication, and API integration.

<img width="800" height="500" alt="image" src="https://github.com/user-attachments/assets/1bdc280f-3184-4c34-b1a2-4415c881a740" />

### State Management
- Props
- State
- `useState` Hook
- Updating State
- Managing Arrays & Objects
### State Variables

```jsx
const [ingredients, setIngredients] = React.useState([]);
const [recipe, setRecipe] = React.useState("");
```

- **ingredients** → Stores the list of ingredients entered by the user.
- **recipe** → Stores the AI-generated recipe returned from the API.

### How State Works

1. The user enters an ingredient.
2. The ingredient is added to the `ingredients` state using `setIngredients()`.
3. React automatically re-renders the component and updates the ingredients list.
4. When the user clicks **Get Recipe**, the generated recipe is stored in the `recipe` state.
5. The recipe is then displayed using conditional rendering.

## Auto Scroll

The project also uses the **`useRef`** and **`useEffect`** Hooks to automatically scroll to the generated recipe after it is received.

```jsx
const recipeShown = React.useRef("");

React.useEffect(() => {
    if (recipe !== "" && recipeShown.current !== null) {
        recipeShown.current.scrollIntoView({
            behavior: "smooth"
        });
    }
}, [recipe]);
```

### Hooks Used

- **`useState`** → Manages ingredients and recipe data.
- **`useEffect`** → Runs after the recipe state changes.
- **`useRef`** → References the recipe section for smooth scrolling.

### Event Handling & Forms
- `onClick`, `onChange`, `onSubmit`
- Form Handling
- `FormData`
- `Object.fromEntries()`

### Rendering
- Conditional Rendering
- Ternary Operator
- Rendering Lists using `map()`

### Component Communication
- Passing Props
- Passing Functions as Props
- Parent-Child Communication
- Lifting State Up

### API Integration
- Fetch API
- Async/Await
- JSON Handling
- AI API Integration
- Formatting AI Responses
- ## AI Workflow

```text
User Inputs Ingredients
          │
          ▼
React Form Submission
          │
          ▼
Update State using useState
          │
          ▼
Send Request to Hugging Face API
          │
          ▼
Receive AI Response
          │
          ▼
Format Markdown Response
          │
          ▼
Display Recipe in UI
```

**Learning resoure:** https://www.youtube.com/watch?v=x4rFhThSX04
<br/>
**Time Span:** 4:33:02 Section 3 – Chef Claude Project
