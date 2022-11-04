import express from 'express';

import { connectDB } from "./database/index";

import { router } from "./routes";

const app = express();

connectDB();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log('HTTP Server running!');
});