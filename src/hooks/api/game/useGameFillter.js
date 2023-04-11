import useAsync from '../../useAsync';

import * as gameApi from '../../../services/api/gamesApi';

export default function useGameFillter() {
  const {
    loading: gameLoading,
    error: gameError,
    data: gameData,
    act: gameFillter
  } = useAsync((platform,genre)=>gameApi.getGamesFilter(platform,genre));

  return {
    gameLoading,
    gameError,
    gameData,
    gameFillter
  };
}