import useAsync from '../../useAsync';

import * as commentApi from '../../../services/api/commentsApi';

export default function useGetComment() {
  const {
    loading: commentLoading,
    error: commentError,
    data: commentData,
    act: comment
  } = useAsync((gameId)=>commentApi.getComments(gameId),false);

  return {
    commentLoading,
    commentError,
    commentData,
    comment
  };
}