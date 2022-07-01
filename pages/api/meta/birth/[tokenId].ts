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
  // const editionDigit = ('0' + tokenId).slice(-2);

  const tokenMeta = {
    name: `GENESIS VAN #${tokenId}`,
    description:
      'GENESIS is a 2022 genesis collection by Fiigmnt, built on Mirage.',
    external_url: 'https://princessbleach.com/',
    image:
      'https://openseauserdata.com/files/039fe93c7e0043816108fd7e97abb671.gif',
    animation_url: 'https://princessbleach.com/tester/index.html',
    attributes: [
      {
        trait_type: 'Model',
        value: 'Van',
      },
      {
        display_type: 'number',
        trait_type: 'Edition',
        value: tokenId,
      },
      {
        trait_type: 'Latitude',
        value: 40.765509323990656,
      },
      {
        trait_type: 'Longitude',
        value: -73.97059820831649,
      },
      {
        display_type: "date", 
        trait_type: "dropped", 
        value: 1546360800
      }
    ],
  };

  res.status(200).json(tokenMeta);
}
