import express from 'express';
import { userRouter } from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
