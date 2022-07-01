// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// TODO: update to include degrees utility function and attributes
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
    name: `MIRAGE GENESIS #${tokenId}`,
    description:
      'GENESIS is a 2022 genesis collection by Fiigmnt, built on Mirage.',
    external_url: 'https://princessbleach.com/',
    image:
      'https://openseauserdata.com/files/039fe93c7e0043816108fd7e97abb671.gif',
    animation_url: 'https://princessbleach.com/tester/index.html',
    attributes: [
      {
        display_type: 'number',
        trait_type: 'edition',
        value: tokenId,
      },
      {
        trait_type: 'cloud',
        value: 'Chinatown Van',
      },
      {
        trait_type: 'latitude',
        value: `40° 45' 55.8324"`,
      },
      {
        trait_type: 'longitude',
        value: `-73° 58' 14.1522"`,
      },
      // {
      //   trait_type: "elevation",
      //   value: `2.1 meters`
      // },
      {
        display_type: 'date',
        trait_type: 'Artist Dropped',
        value: 1546360800,
      },
      {
        display_type: 'date',
        trait_type: 'claimed',
        value: 1646360800,
      },
      // IF USER HAS MOVED ITEM SHOW REBASE DATE
      {
        display_type: 'date',
        trait_type: 'rebased',
        value: 1656698855,
      },
    ],
  };

  res.status(200).json(tokenMeta);
}
