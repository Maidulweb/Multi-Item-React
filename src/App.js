import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import './index.css';

function App() {
  return (
    <div className="flex justify-around">
      <div className="p-4 text-center uppercase text-lg font-bold">
        <ClickCounter />
      </div>
      <div className="p-4 text-center uppercase text-lg font-bold">
        <HoverCounter />
      </div>
      <div className="p-4 text-center uppercase text-lg font-bold">
        <ClickCounter />
      </div>
    </div>
  );
}

export default App;
