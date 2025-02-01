import { useContext } from "react";
import { countContext } from "./App";

export default function Button() {
  let x = useContext(countContext);
  console.log(x);

  return <button onClick={x.countP}>count + </button>;
}
