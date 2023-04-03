import useAsync from '../useAsync';

import * as wishApi from '../../services/api/wishApi';

export default function useDelWish() {
  const {
    loading: wishLoading,
    error: wishError,
    data: wishData,
    act: wishDel
  } = useAsync((id)=>wishApi.delWish(id));

  return {
    wishLoading,
    wishError,
    wishData,
    wishDel
  };
}