import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    title: '', description: '', ingredients: '', instructions: ''
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const newRecipe = await res.json();
    setRecipes([...recipes, newRecipe]);
    setForm({ title: '', description: '', ingredients: '', instructions: '' });
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/api/recipes/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      setRecipes(recipes.filter(r => r.id !== id));
    }
  };

  return (
    <div className="background">
      <div className="overlay">
        <div className="container">
          <h1>🍽️ Delicious Recipe Portal</h1>

          <form className="recipe-form" onSubmit={handleSubmit}>
            <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            <input placeholder="Ingredients" value={form.ingredients} onChange={e => setForm({ ...form, ingredients: e.target.value })} />
            <input placeholder="Instructions" value={form.instructions} onChange={e => setForm({ ...form, instructions: e.target.value })} />
            <button type="submit">Add Recipe</button>
          </form>

          <div className="recipe-list">
            {recipes.map((r) => (
              <div key={r.id} className="recipe-card">
                <div className="recipe-content">
                  <h2>{r.title}</h2>
                  <p><strong>Description:</strong> {r.description}</p>
                  <p><strong>Ingredients:</strong> {r.ingredients}</p>
                  <p><strong>Instructions:</strong> {r.instructions}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
