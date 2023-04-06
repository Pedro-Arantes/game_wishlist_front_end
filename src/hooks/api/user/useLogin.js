import useAsync from '../../useAsync';

import * as loginApi from '../../../services/api/loginApi';

export default function useLogin() {
  const {
    loading: loginLoading,
    error: loginError,
    data: loginData,
    act: login
  } = useAsync(loginApi.login, false);

  return {
    loginLoading,
    loginError,
    loginData,
    login
  };
}