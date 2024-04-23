// import React, { useState } from "react";
// import { Scoreboard } from "./Scoreboard";
// import { GameHistory } from "./Gamehistory";
// import { GameHistoryProvider } from './GameHistoryContext'; // Import the GameHistoryProvider

// export const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const handleTab1 = () => {
//     setActiveTab("tab1");
//   };

//   const handleTab2 = () => {
//     setActiveTab("tab2");
//   };

//   return (
//     <div className="Tabs">
//       <ul className="nav">
//         <li
//           className={activeTab === "tab1" ? "active" : ""}
//           onClick={handleTab1}
//         >
//           Scoreboard
//         </li>
//         <li
//           className={activeTab === "tab2" ? "active" : ""}
//           onClick={handleTab2}
//         >
//           Game history
//         </li>
//       </ul>
//       <div className="outlet">
//       <GameHistoryProvider>
//         {activeTab === "tab1" ? (
//           <Scoreboard />
//         ) : (
//           <GameHistory />
//         )}
//         </GameHistoryProvider>
//       </div>
//     </div>
//   );
// };
