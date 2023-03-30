
export default function useToken(){
    if (typeof window !== 'undefined'){
        return localStorage.getItem("token")
    }
}