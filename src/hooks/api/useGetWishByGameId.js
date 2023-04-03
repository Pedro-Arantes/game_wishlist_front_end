import useAsync from '../useAsync';

import * as wishApi from '../../services/api/wishApi';

export default function useGetWishByGameId() {
  const {
    loading: wishLoading,
    error: wishError,
    data: wishData,
    act: wish
  } = useAsync((gameId)=>wishApi.getWishByGameId(gameId),false);

  return {
    wishLoading,
    wishError,
    wishData,
    wish
  };
}