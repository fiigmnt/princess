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
  const editionDigit = ('000' + tokenId).slice(-4);

  const tokenMeta = {
    name: `FRAGMENTS: VAN ${editionDigit}`,
    description: 'FRAGMENTS is a 2022 genesis collection by Fiigmnt, built on MIRAGE.',
    external_url: 'https://princessbleach.com/',
    image: `https://princessbleach.com/drops/birth/${tokenId}.png`,
    animation_url: 'https://princessbleach.com/tester/index.html',
  };

  res.status(200).json(tokenMeta);
}
