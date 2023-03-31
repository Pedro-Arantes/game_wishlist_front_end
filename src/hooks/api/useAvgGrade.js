import useAsync from '../useAsync';

import * as gradesApi from '../../services/api/gradesApi';

export default function useAvgGrade(gameId) {
  const {
    loading: gradesLoading,
    error: gradesError,
    data: gradesData,
    act: avgGrades
  } = useAsync(()=>gradesApi.avgGrade(gameId));

  return {
    gradesLoading,
    gradesError,
    gradesData,
    avgGrades
  };
}