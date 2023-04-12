import useToken from "@/hooks/useToken";
import api from "./api";

export async function getComments(gameId) {
  const resp = await api.get(`/comments/${gameId}`);
  return resp;
}
export async function postComment(text, gameId) {
  const token = useToken();
  const resp = await api.post(
    "/comments",
    {
      text,
      gameId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return resp ;
}
export async function delComment(id) {
    const token = useToken();
    const resp = await api.delete(
        `/comments/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
}
