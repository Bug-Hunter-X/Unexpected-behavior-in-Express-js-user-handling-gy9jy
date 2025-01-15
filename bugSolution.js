const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to fetch user with userId ...
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user }); // Send user data as a JSON object
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});