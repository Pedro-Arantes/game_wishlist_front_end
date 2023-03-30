import useAsync from '../useAsync';

import * as gamesApi from '../../services/api/gamesApi';

export default function useGetGames() {
  const {
    loading: gamesLoading,
    error: gamesError,
    data: gamesData,
    act: games
  } = useAsync(()=>gamesApi.getGames());

  return {
    gamesLoading,
    gamesError,
    gamesData,
    games
  };
}