import useAsync from '../useAsync';

import * as gameApi from '../../services/api/gamesApi';

export default function useGameById(Id) {
  const {
    loading: gameLoading,
    error: gameError,
    data: gameData,
    act: gameBy
  } = useAsync(()=>gameApi.getGameById(Id));

  return {
    gameLoading,
    gameError,
    gameData,
    gameBy
  };
}