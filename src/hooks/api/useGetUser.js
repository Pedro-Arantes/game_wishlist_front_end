import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function useGetUser() {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
    act: user
  } = useAsync(()=>userApi.User());

  return {
    userLoading,
    userError,
    userData,
    user
  };
}