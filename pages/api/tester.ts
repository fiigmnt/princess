// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

const filename = './static/tester/index.html';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(await fs.readFileSync(filename, 'utf-8'));
  res.end();
};

export default handler;
