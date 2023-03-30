import useAsync from '../useAsync';

import * as gradesApi from '../../services/gradesApi';

export default function useAvgGrade(gameId) {
  const {
    loading: gradesLoading,
    error: gradesError,
    data: gradesData,
    act: grades
  } = useAsync(()=>gradesApi.avgGrade(gameId));

  return {
    gradesLoading,
    gradesError,
    gradesData,
    grades
  };
}