import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const contriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Countries contriesPromise={contriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
