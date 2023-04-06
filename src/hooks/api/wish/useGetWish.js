import useAsync from '../../useAsync';

import * as wishApi from '../../../services/api/wishApi';

export default function useGetWish(token) {
  const {
    loading: wishLoading,
    error: wishError,
    data: wishData,
    act: wish
  } = useAsync(()=>wishApi.getWishlist(token));

  return {
    wishLoading,
    wishError,
    wishData,
    wish
  };
}