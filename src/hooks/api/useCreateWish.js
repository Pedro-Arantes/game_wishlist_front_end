import useAsync from '../useAsync';

import * as wishApi from '../../services/api/wishApi';

export default function useCreateWish() {
  const {
    loading: wishLoading,
    error: wishError,
    data: wishData,
    act: wishCreate
  } = useAsync((gameId)=>wishApi.postWish(gameId),false);

  return {
    wishLoading,
    wishError,
    wishData,
    wishCreate
  };
}