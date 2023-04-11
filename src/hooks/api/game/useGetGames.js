import useAsync from '../../useAsync';

import * as gamesApi from '../../../services/api/gamesApi';

export default function useGetGames() {
  const {
    loading: gamesLoading,
    error: gamesError,
    data: gamesData,
    act: getGames
  } = useAsync(()=>gamesApi.getGames());

  return {
    gamesLoading,
    gamesError,
    gamesData,
    getGames
  };
}