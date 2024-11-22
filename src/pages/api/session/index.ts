import { SessionData } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';
/**
 * Returns server session context to hydrate client-side app
 *
 * See [Cluster, Authorization & Authentication Headers](https://confluence.nml.com/pages/viewpage.action?pageId=347013178) for all all available request headers
 *
 * @param {Object} req - incoming request object
 * @param {Object} res - response object
 */

export default async function sessionHandler (req: NextApiRequest, res: NextApiResponse) {
  const headers = req.headers || {};
  const data: SessionData = {
    sha: process.env.GIT_COMMIT,
    version: process.env.NMXP_APP_VERSION,
    user: {
      nmuid: headers['x-nm-nm_uid'],
      userType: headers['x-nm-user-type']
    }
  };

  res.status(200).json(data);
};
