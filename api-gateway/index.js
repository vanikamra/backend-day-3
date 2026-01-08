const express = require('express');
const fetch = require('node-fetch'); // Import node-fetch
const app = express();
const port = 3002;
// app.get('/users/:id', async (req, res) => {
//  const response = await fetch(`http://localhost:3000/users/${req.params.id}`);
//  const data = await response.json();
//  res.json(data);
// });
app.get('/products/:id', async (req, res) => {
 const response = await fetch(`http://localhost:3001/products/${req.params.id}`);
 const data = await response.json();
 res.json(data);
 });
app.listen(port, () => {
 console.log(`API Gateway listening on port ${port}`);
});

app.get('/userProducts/:userId', async (req, res) => {
 try {
 const userResponse = await
fetch(`http://localhost:3000/users/${req.params.userId}`);
 const userData = await userResponse.json();
 // Mock product association - replace with actual logic in a real application
 const productIds = userData.products || []; // Assuming a 'products' field in user data
 const productPromises = productIds.map(productId =>
fetch(`http://localhost:3001/products/${productId}`));
 const productResponses = await Promise.all(productPromises);
 const productData = await Promise.all(productResponses.map(res => res.json()));
 //If no products are associated, send an empty array or handle accordingly
 const combinedData = {
 user: userData,
 products: productData.length > 0 ? productData : []
 }
 res.json(combinedData);
 } catch (error) {
 console.error("Error fetching data:", error);
 res.status(500).json({ message: 'Error fetching data' });
 }
})


// ... add this library after other imports
const basicAuth = require('basic-auth')
// ... other routes
const authMiddleware = (req, res, next) => {
 const credentials = basicAuth(req);

 if (!credentials || !authenticate(credentials.name, credentials.pass)) {
 res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
 return res.sendStatus(401);
 }

 next();
 };
const authenticate = (username, password) => {
 // Replace with actual authentication logic (e.g., database lookup)
 // Simplified example below.
 if (username === 'admin' && password == 'password') {
 return true
 }
 return false
}

app.get('/users/:id', authMiddleware, async (req, res) => {
  const response = await fetch(`http://localhost:3000/users/${req.params.id}`);
  const data = await response.json();
  res.status(response.status).json(data);
});
