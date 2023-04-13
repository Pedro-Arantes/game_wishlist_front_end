import useAsync from '../../useAsync';

import * as commentApi from '../../../services/api/commentsApi';

export default function useDelComment() {
  const {
    loading: commentLoading,
    error: commentError,
    data: commentData,
    act: commentDel
  } = useAsync((id)=>commentApi.delComment(id),false);

  return {
    commentLoading,
    commentError,
    commentData,
    commentDel
  };
}