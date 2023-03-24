import useAsync from '../useAsync';
import * as registerApi from '../../services/registerApi';

export default function useRegister() {
  const {
    loading: registerLoading,
    error: registerError,
    data: registerData,
    act: register
  } = useAsync(registerApi.register, false);

  return {
    registerLoading,
    registerError,
    registerData,
    register
  };
}