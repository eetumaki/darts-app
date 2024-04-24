import { Scoreboard } from "./Scoreboard";
import '../App.css';
import { GameHistoryProvider } from "./GameHistoryContext";

export function Main() {
    return (
        <GameHistoryProvider>
            <div className="Tabs">
                <Scoreboard />
            </div>
        </GameHistoryProvider>
    )
}
