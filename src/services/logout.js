import useDelSession from "@/hooks/api/user/useDelSession";
import { useRouter } from "next/router";


export default function logoutMessage(router,err){

    if(err){
        return alert("Erro ao Deslogar!")
    }else{
        alert("Deslogado com Sucesso!")
        localStorage.clear();
        router.push("/")
    }
    
}