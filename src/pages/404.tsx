import { NotFound } from '@nmxp/next';

/**
 * NextJS custom 404 page | [Documentation](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#404-page)
 * See also: [px-platform/nmlv-error-pages](https://git.nmlv.nml.com/px-platform/nmlv-error-pages)
 */
export default function Custom404 () {
  return (
    <NotFound />
  );
};
