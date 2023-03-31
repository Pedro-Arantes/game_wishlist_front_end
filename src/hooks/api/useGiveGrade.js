import useAsync from '../useAsync';
import * as gradesApi from '../../services/api/gradesApi';

export default function useGiveGrade() {
  const {
    loading: gradeLoading,
    error: gradeError,
    act: grades
  } = useAsync((data,dt)=>gradesApi.upsertGrade(data,dt), false);

  return {
    gradeLoading,
    gradeError,
    grades
  };
}