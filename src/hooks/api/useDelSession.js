import useAsync from '../useAsync';

import * as loginApi from '../../services/api/loginApi';

export default function useDelSession() {
  const {
    loading: sessionLoading,
    error: sessionError,
    data: sessionData,
    act: session
  } = useAsync(()=>loginApi.logout,false);

  return {
    sessionLoading,
    sessionError,
    sessionData,
    session
  };
}