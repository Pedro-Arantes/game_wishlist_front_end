import useAsync from '../useAsync';

import * as wishApi from '../../services/api/wishApi';

export default function useGetWishByGameId(gameId) {
  const {
    loading: wishLoading,
    error: wishError,
    data: wishData,
    act: wish
  } = useAsync(()=>wishApi.getWishByGameId(gameId));

  return {
    wishLoading,
    wishError,
    wishData,
    wish
  };
}