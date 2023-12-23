import express from 'express';
import * as dotevnv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotevnv.config();

if (!process.env.PORT) {
  console.error('No port value specified...');
}

const PORT = parseInt(String(process.env.PORT), 10);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
