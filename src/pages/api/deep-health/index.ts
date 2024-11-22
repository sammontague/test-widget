import deephealth from '@nm/deephealth';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Deep Health handler
 *
 * [Deephealth APIs](https://git.nmlv.nml.com/px-platform/nmpx-deephealth#apis)
 *
 * @param {Object} _req - incoming request object
 * @param {Object} res - response object
 */
export default async function deepHealthHandler (_req: NextApiRequest, res: NextApiResponse) {
  const stats = await deephealth({
    // dependencies: Array of objects that describe your app's dependencies
    dependencies: [
    /* {
      // Example:
      name: 'plan-output-service', // String (required) - the dependency's name, case sensitive
      host: 'https://api-int.nmlv.nml.com', // String (required) - the dependency's host
      pathname: '/v1/nmc-data-proxy/health' // String (default=/health) - the path to the dependency's health endpoint
    } */
    ]
  });

  res.status(200).json(stats);
};
