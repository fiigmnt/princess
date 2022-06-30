// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type TokenMeta = {
  name: string;
  description: string;
  external_url: string;
  image: string;
  audio_url: string;
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

  const tokenMeta = {
    name: `BIRTH #${tokenId}`,
    description: 'BIRTH is a 2022 release by PRINCESS BLEACH.',
    external_url: 'https://princessbleach.com/',
    image: `https://princessbleach.com/drops/birth/${tokenId}.png`,
    audio_url: 'https://princessbleach.com/drops/birth.mp3',
  };

  res.status(200).json(tokenMeta);
}
