
export default function useGameId(){
    if (typeof window !== 'undefined'){
        return localStorage.getItem("gameId")
    }
}
