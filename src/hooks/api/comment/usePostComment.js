import useAsync from '../../useAsync';

import * as commentApi from '../../../services/api/commentsApi';

export default function usePostComment() {
  const {
    loading: commentLoading,
    error: commentError,
    data: commentData,
    act: commentCreate
  } = useAsync((text,gameId)=>commentApi.postComment(text,gameId));

  return {
    commentLoading,
    commentError,
    commentData,
    commentCreate
  };
}