import useAsync from '../../useAsync';

import * as gameApi from '../../../services/api/gamesApi';

export default function useGameByName() {
  const {
    loading: gameLoading,
    error: gameError,
    data: gameData,
    act: gameBy
  } = useAsync((name)=>gameApi.getGameByName(name));

  return {
    gameLoading,
    gameError,
    gameData,
    gameBy
  };
}