import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Handle health status
 *
 * [Next.js API route introduction](https://nextjs.org/docs/api-routes/introduction)
 *
 * @param {Object} _req - incoming request object
 * @param {Object} res - response object
 */
export default function healthHandler (_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: process.env.NMXP_APP_NAME,
    sha: process.env.GIT_COMMIT,
    version: process.env.NMXP_APP_VERSION,
    env: process.env.NODE_ENV,
    instance: process.env.NODE_APP_INSTANCE,
    config: process.env.NODE_CONFIG_ENV
  });
};
