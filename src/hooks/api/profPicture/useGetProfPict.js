import useAsync from '../../useAsync';

import * as profPictureApi from '../../../services/api/profPictureApi';

export default function useGetProfPict() {
  const {
    loading: profPictLoading,
    error: profPictError,
    data: profPictData,
    act: profPict
  } = useAsync(()=> profPictureApi.getProfPict() );

  return {
    profPictLoading,
    profPictError,
    profPictData,
    profPict
  };
}