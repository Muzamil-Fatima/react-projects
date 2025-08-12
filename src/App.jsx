import { Route, Routes } from "react-router-dom";
import Linked from "../src/Components/Linked";
import "./index.css";
import Counter from "./1.ButtonClickCounter/Counter";
import Mode from "./2.DarkLightModeToggle/Mode";
import DropDown from "./3.DropdownValueDisplay/DropDown";
import Changer from "./5.ColorChangerWithButton/Changer";
import Password from "./4.ShowHidePassword/Password";
import Character from "./6.LiveCharacterCounter/Character";
import Model from "./7.ModalPop-up/Model";
import Percentage from "./8.PercentageCalculator/Percentage";
import Accordion from "./9.Accordion/Accordion";
import Tab from "./10.TabsSwitching/Tab";
import Input from "./11.InputField/Input";
import FormatEmail from "./12.EmailFormat/FormatEmail";
import PasswordStrength from "./13.PasswordStrength/PasswordStrength";
import CheckBox from "./14.Checkbox/CheckBox";
import Capitalize from "./15.AutoCapitalize/Capitalize";
import CharacterCounter from "./16.CharacterCounter/CharacterCounter";
import Forms from "./17.ShowHideForm/Forms";
import Preview from "./18.LivePreviewOfInput/Preview";
import ValueIndicator from "./19.ValueIndicator/ValueIndicator";
import RandomPasswordGenerator from "./20.RandomPasswordGenerator/RandomPasswordGenerator";
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
        <Route path="model" element={<Model />} />
        <Route path="percentage-calculator" element={<Percentage />} />
        <Route path="show-hide" element={<Accordion />} />
        <Route path="tab" element={<Tab />} />
        <Route path="input" element={<Input />} />
        <Route path="email-format" element={<FormatEmail />} />
        <Route path="password-strength" element={<PasswordStrength />} />
        <Route path="check-box" element={<CheckBox />} />
        <Route path="capitalize" element={<Capitalize />} />
        <Route path="character" element={<CharacterCounter />} />
        <Route path="forms" element={<Forms />} />
        <Route path="preview" element={<Preview />} />
        <Route path="value-indicator" element={<ValueIndicator />} />
        <Route path="random-password" element={<RandomPasswordGenerator />} />
      </Routes>
    </div>
  );
}

export default App;
