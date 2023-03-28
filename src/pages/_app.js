import { GameProvider } from "@/contexts/GameContext";
import { UserProvider } from "@/contexts/UserContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GameProvider>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </GameProvider>
  );
}
