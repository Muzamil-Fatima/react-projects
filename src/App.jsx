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
import ToDo from "./21.TodoList/ToDo";
import ParagraphToggle from "./23.ToggleParagraph/ParagraphToggle";
import Greeting from "./25.GreetingApp/Greeting";
import ProfileCard from "./26.ProfileCardComponent/ProfileCard";
import FormHandler from "./27.FormHandlerApp/FormHandler";
import CartCounter from "./28.ShoppingCartCounter/CartCounter";
import ListSort from "./30.ListSort/ListSort";
import Clock from "./31.LiveDigitalClock/Clock";
import CountdownTimer from "./32.CountdownTimer/CountdownTimer";
import Task from "./33.TaskManager/Task";
import Age from "./34.AgeCalculator/Age";
import GradeBook from "./35.StudentGradebook/GradeBook";
import Theme from "./36.ThemeSwitcher/Theme";
import StarRating from "./37.StarRatingSystem/StarRating";
import Banking from "./38.BankingApp/Banking";
import Inventory from "./39.InventorySystem/Inventory";
import CounterApp from "./40.CounterApp/CounterApp";
import UserManagement from "./29.UserManagementSystem/UserManagement";
import AlertBox from "./43.CustomAlertBox/AlertBox";
import Github from "./44.GitHubProfileViewer/Github";
import Recipe from "./45.RecipeSearchApp/Recipe";
import Weather from "./46.WeatherApp/Weather";
import Country from "./47.CountryInfoFinder/Country";
import News from "./48.NewsFetcher/News";
import Currency from "./49.CurrencyConverter/Currency";
import ToDoApp from "./50.TodoAppFakeAPI/ToDoApp";
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
        {/* part 2 */}
        <Route path="to-do" element={<ToDo />} />
        <Route path="paragraph-toggle" element={<ParagraphToggle />} />
        <Route path="greeting" element={<Greeting />} />
        <Route path="profile-card" element={<ProfileCard />} />
        <Route path="form-handler" element={<FormHandler />} />
        <Route path="cart-counter" element={<CartCounter />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="list-sort" element={<ListSort />} />
        <Route path="clock" element={<Clock />} />
        <Route path="count-down-timer" element={<CountdownTimer />} />
        <Route path="task" element={<Task />} />
        <Route path="age" element={<Age />} />
        <Route path="grade-book" element={<GradeBook />} />
        <Route path="theme" element={<Theme />} />
        <Route path="star-rating" element={<StarRating />} />
        <Route path="banking" element={<Banking />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="count-app" element={<CounterApp />} />
        <Route path="alert-box" element={<AlertBox />} />
        {/* part 3 */}
        <Route path="alert-box" element={<Github />} />
        <Route path="alert-box" element={<Recipe />} />
        <Route path="alert-box" element={<Weather />} />
        <Route path="alert-box" element={<Country />} />
        <Route path="alert-box" element={<News />} />
        <Route path="alert-box" element={<Currency />} />
        <Route path="alert-box" element={<ToDoApp />} />
      </Routes>
    </div>
  );
}

export default App;
