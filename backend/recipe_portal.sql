CREATE DATABASE my_new_recipe_db;
USE my_new_recipe_db;

CREATE TABLE recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  ingredients TEXT,
  instructions TEXT
);
INSERT INTO recipes (title, description, ingredients, instructions) VALUES
('Sushi', 'Japanese vinegared rice roll with seafood or vegetables.', 
 'Sushi rice, Nori sheets, Fresh fish, Vegetables, Soy sauce, Wasabi', 
 'Cook and season the rice. Place on nori, add fillings, roll tightly, slice, and serve.'),

('Spaghetti Bolognese', 'Classic Italian pasta with rich meat sauce.', 
 'Spaghetti, Ground beef, Onion, Garlic, Tomato sauce, Olive oil, Herbs', 
 'Cook spaghetti. Sauté onion and garlic, add beef, then tomato sauce and herbs. Simmer and serve over pasta.'),

('Tacos', 'Mexican-style soft or crunchy tortillas filled with meat and veggies.', 
 'Tortillas, Ground beef or chicken, Lettuce, Tomato, Cheese, Salsa', 
 'Cook meat with seasoning. Fill tortillas with meat, veggies, and toppings.'),

('Veggie Stir Fry', 'Quick Asian-style sautéed vegetables in soy sauce.', 
 'Broccoli, Carrot, Bell pepper, Onion, Soy sauce, Garlic, Ginger', 
 'Chop vegetables. Stir fry with garlic and ginger. Add soy sauce and cook till tender.'),

('Chocolate Cake', 'Rich and moist chocolate cake perfect for dessert.', 
 'Flour, Cocoa powder, Eggs, Sugar, Butter, Baking powder, Milk', 
 'Mix dry and wet ingredients separately, then combine. Bake at 180°C for 35 minutes.'),

('Miso Soup', 'Traditional Japanese soup with tofu and seaweed.', 
 'Miso paste, Dashi broth, Tofu, Wakame seaweed, Green onions', 
 'Heat dashi, dissolve miso, add tofu and seaweed. Simmer and serve hot.'),

('French Omelette', 'Soft and fluffy French-style egg omelette.', 
 'Eggs, Butter, Salt, Pepper, Herbs (optional)', 
 'Beat eggs. Cook in butter on low heat, stir until soft, then fold and serve.'),

('Grilled Cheese Sandwich', 'Toasted sandwich with melted cheese.', 
 'Bread, Butter, Cheese slices', 
 'Butter bread, place cheese in between, grill until golden brown and crispy.');

