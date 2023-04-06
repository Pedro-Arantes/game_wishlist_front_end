import UserContext, { useUserContext } from "@/contexts/UserContext";
import useToken from "@/hooks/useToken";
import { useContext } from "react";
import api from "./api";

export async function User() {
  const token = useToken();
  const response = await api.get("/userId", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export async function patchUser(pictureId){

  const token = useToken();
  const response = await api.patch(`/user/${pictureId}`,null,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response ;
}
