import useAsync from '../../useAsync';
import * as userApi from '../../../services/api/userApi';

export default function usePatchPicture() {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
    act: userPatch
  } = useAsync((pictureId)=>userApi.patchUser(pictureId) , false);

  return {
    userLoading,
    userError,
    userData,
    userPatch
  };
}