import { UnhandledError } from '@nmxp/next';

/**
 * NextJS Custom 500 error page | [Documentation](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#500-page)
 * See also: [px-platform/nmlv-error-pages](https://git.nmlv.nml.com/px-platform/nmlv-error-pages)
 */
export default function Custom500 () {
  return (
    <UnhandledError />
  );
};
