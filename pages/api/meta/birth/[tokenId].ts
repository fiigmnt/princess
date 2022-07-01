// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type TokenMeta = {
  name: string;
  description: string;
  external_url: string;
  image: string;
  animation_url: string;
};

// TODO: move this to a general util file
const validate = (query: any) => {
  if (typeof query === 'object') {
    if (!query.tokenId) {
      throw new Error('tokenId not provided');
    }
    return {
      tokenId: query.tokenId,
    };
  }
  throw new Error('invalid query');
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TokenMeta>
) {
  const { tokenId } = validate(req.query);
  const editionDigit = ('0' + tokenId).slice(-2);

  const tokenMeta = {
    name: `GENESIS: VAN #${editionDigit}`,
    description: 'GENESIS is a 2022 genesis collection by Fiigmnt, built on Mirage.',
    external_url: 'https://princessbleach.com/',
    image: "https://openseauserdata.com/files/039fe93c7e0043816108fd7e97abb671.gif",
    animation_url: 'https://princessbleach.com/tester/index.html',
  };

  res.status(200).json(tokenMeta);
}
