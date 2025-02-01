import { useContext } from "react";
import { countContext } from "./App";

export default function ButtonM() {
  let { countM } = useContext(countContext);

  return <button onClick={countM}>count - </button>;
}
