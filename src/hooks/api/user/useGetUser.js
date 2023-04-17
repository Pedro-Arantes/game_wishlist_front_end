import useAsync from '../../useAsync';

import * as userApi from '../../../services/api/userApi';

export default function useGetUser() {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
    act: user
  } = useAsync(()=>userApi.User(),false);

  return {
    userLoading,
    userError,
    userData,
    user
  };
}