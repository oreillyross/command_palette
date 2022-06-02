import "./styles.css";
import CommandPalette from "./CommandPalette";
import { notes } from "./fakeNotes";

export default function App() {
  return (
    <>
      <CommandPalette notes={notes} />
      <div className="py-4 px-4 text-lg bg-green-200">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
