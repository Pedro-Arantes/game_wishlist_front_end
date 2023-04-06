import useAsync from '../../useAsync';
import * as gamesApi from '../../../services/api/gamesApi';

export default function usePostGame() {
  const {
    loading: gameLoading,
    error: gameError,
    act: postGame
  } = useAsync((name,image,platform,genre)=>gamesApi.postGame(name,image,platform,genre), false);

  return {
    gameLoading,
    gameError,
    postGame
  };
}