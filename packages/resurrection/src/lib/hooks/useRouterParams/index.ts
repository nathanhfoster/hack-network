import { useRouter } from 'next/router';
import { NextRouterAugmented } from '../../types';

export default function useRouterParams(): NextRouterAugmented {
  const router = useRouter();
  return router as NextRouterAugmented;
}
