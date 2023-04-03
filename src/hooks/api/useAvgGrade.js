import useAsync from '../useAsync';

import * as gradesApi from '../../services/api/gradesApi';

export default function useAvgGrade() {
  const {
    loading: gradesLoading,
    error: gradesError,
    data: gradesData,
    act: avgGrades
  } = useAsync((gameId)=>gradesApi.avgGrade(gameId),false);

  return {
    gradesLoading,
    gradesError,
    gradesData,
    avgGrades
  };
}