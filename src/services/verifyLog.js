import useToken from "@/hooks/useToken";

export function verify(){
    const token = useToken()
    if(!token){
        return false
    }
    return true 
}