import { createContext } from "react";
import { useState } from "react";
import Button from "./Button";
import ButtonM from "./ButtonM";

// function Card({ fun }) {
//   return (
//     <div className="card">
//       <Button fun={fun} />
//     </div>
//   );
// }
let countContext = createContext();
const App = () => {
  let [countState, setCountState] = useState(0);
  function countP() {
    setCountState((countState += 1));
  }
  function countM() {
    setCountState((countState -= 1));
  }
  return (
    <countContext.Provider value={{ countP, countM }}>
      <div className="app">
        <p>cout: {countState}</p>
        <Button />
        <ButtonM />
      </div>
    </countContext.Provider>
  );
};
export { countContext };
export default App;
