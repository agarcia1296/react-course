import express from 'express';
import fs from 'fs';
import { Product } from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const search = req.query.search;

  let products;
  if (search) {
    products = await Product.findAll();

    // Filter products by case-insensitive search on name or keywords
    const lowerCaseSearch = search.toLowerCase();

    products = products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(lowerCaseSearch);

      const keywordsMatch = product.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseSearch));

      return nameMatch || keywordsMatch;
    });

  } else {
    products = await Product.findAll();
  }

  res.json(products);
});

router.get('/new-releases', async (req, res) => {
  try {

    const data = fs.readFileSync('./backend/newReleases.json');
    const newReleases = JSON.parse(data);

    res.json(newReleases);

  } catch (err) {
    res.status(500).json({ error: 'Could not load new releases' });
  }
});

export default router;