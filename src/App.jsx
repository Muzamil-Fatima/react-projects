import { Route, Routes } from "react-router-dom";
import Linked from "../src/Components/Linked";
import "./index.css";
import Counter from "./1.ButtonClickCounter/Counter";
import Mode from "./2.DarkLightModeToggle/Mode";
import DropDown from "./3.DropdownValueDisplay/DropDown";
import Changer from "./5.ColorChangerWithButton/Changer";
import Password from "./4.ShowHidePassword/Password";
import Character from "./6.LiveCharacterCounter/Character";
import Capitalize from "./15.AutoCapitalize/Capitalize";
import Preview from "./18.LivePreviewOfInput/Preview";
import Accordion from "./9.Accordion/Accordion";
import Tab from "./10.TabsSwitching/Tab";
function App() {
  return (
    <div className="bg-black w-full max-h-screen h-screen overflow-y-auto p-10 text-white ">
      <Routes>
        <Route path="/" element={<Linked />} />
        <Route path="counter" element={<Counter />} />
        <Route path="toggle" element={<Mode />} />
        <Route path="dropdown" element={<DropDown />} />
        <Route path="password" element={<Password />} />
        <Route path="change-color" element={<Changer />} />
        <Route path="char-count" element={<Character />} />
        <Route path="capitalize" element={<Capitalize />} />
        <Route path="character" element={<Character />} />
        <Route path="preview" element={<Preview />} />
        <Route path="show-hide" element={<Accordion />} />
        <Route path="tab" element={<Tab />} />
      </Routes>
    </div>
  );
}

export default App;
