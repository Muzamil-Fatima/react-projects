import Button from "../Components/Button";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    //   <Route path="" element={<ProfileCard />} />
    <nav>
      <div>
        <div className="border-8 border-amber-600 p-12 bg-pink-200 flex flex-wrap mb-10">
          <h1 className="text-4xl font-bold text-purple-700 w-full mb-3">
            7 mini Project React :
          </h1>
          <NavLink to="github" className="m-2">
            <Button>GitHub Profile View</Button>
          </NavLink>
          <NavLink to="recipe" className="m-2">
            <Button>Recipe App</Button>
          </NavLink>
          <NavLink to="weather" className="m-2">
            <Button>Weather App</Button>
          </NavLink>
          <NavLink to="country" className="m-2">
            <Button>Country Info Finder</Button>
          </NavLink>
          <NavLink to="news-fetcher" className="m-2">
            <Button>News Fetcher</Button>
          </NavLink>
          <NavLink to="currency" className="m-2">
            <Button>Currency Converter</Button>
          </NavLink>
          <NavLink to="todo-fake-api" className="m-2">
            <Button>Todo-Fake API</Button>
          </NavLink>
        </div>
        <div className="border-8 border-amber-600 p-12 bg-pink-200 flex flex-wrap">
          <h1 className="text-4xl font-bold text-purple-700 w-full mb-3">
            20 mini function in React :
          </h1>
          <NavLink to="alert-box" className="m-2">
            <Button>Custom Alert Box</Button>
          </NavLink>
          <NavLink to="count-app" className="m-2">
            <Button>CounterApp</Button>
          </NavLink>
          <NavLink to="inventory" className="m-2">
            <Button>Inventory</Button>
          </NavLink>
          <NavLink to="banking" className="m-2">
            <Button>Banking</Button>
          </NavLink>
          <NavLink to="star-rating" className="m-2">
            <Button>StarRating</Button>
          </NavLink>
          <NavLink to="theme" className="m-2">
            <Button>Theme</Button>
          </NavLink>
          <NavLink to="grade-book" className="m-2">
            <Button>GradeBook</Button>
          </NavLink>
          <NavLink to="age" className="m-2">
            <Button>Age</Button>
          </NavLink>
          <NavLink to="task" className="m-2">
            <Button>Task</Button>
          </NavLink>
          <NavLink to="count-down-timer" className="m-2">
            <Button>CountdownTimer</Button>
          </NavLink>
          <NavLink to="clock" className="m-2">
            <Button>Clock</Button>
          </NavLink>
          <NavLink to="list-sort" className="m-2">
            <Button>ListSort</Button>
          </NavLink>
          <NavLink to="user-management" className="m-2">
            <Button>UserManagement</Button>
          </NavLink>
          <NavLink to="cart-counter" className="m-2">
            <Button>CartCounter</Button>
          </NavLink>
          <NavLink to="form-handler" className="m-2">
            <Button>FormHandler</Button>
          </NavLink>
          <NavLink to="profile-card" className="m-2">
            <Button>Profile Card</Button>
          </NavLink>
          <NavLink to="greeting" className="m-2">
            <Button>Greeting</Button>
          </NavLink>
          <NavLink to="password" className="m-2">
            <Button>Password</Button>
          </NavLink>
          <NavLink to="paragraph-toggle" className="m-2">
            <Button>Paragraph Toggle</Button>
          </NavLink>
          <NavLink to="to-do" className="m-2">
            <Button>To Do List</Button>
          </NavLink>
        </div>
        <div className="border-8 border-amber-600 p-12 bg-pink-200 flex flex-wrap mt-12">
          <h1 className="text-4xl font-bold text-purple-700 w-full mb-3">
            20 mini function in React :
          </h1>
          <NavLink to="random-password" className="m-2">
            <Button>Random Password Generator</Button>
          </NavLink>
          <NavLink to="value-indicator" className="m-2">
            <Button>Value Indicator</Button>
          </NavLink>
          <NavLink to="preview" className="m-2">
            <Button>Input Preview</Button>
          </NavLink>
          <NavLink to="forms" className="m-2">
            <Button>Forms</Button>
          </NavLink>
          <NavLink to="character" className="m-2">
            <Button>Character</Button>
          </NavLink>
          <NavLink to="capitalize" className="m-2">
            <Button>Capitalize</Button>
          </NavLink>
          <NavLink to="check-box" className="m-2">
            <Button>Check Box</Button>
          </NavLink>
          <NavLink to="password-strength" className="m-2">
            <Button>Password Strength</Button>
          </NavLink>
          <NavLink to="email-format" className="m-2">
            <Button>Format Email</Button>
          </NavLink>
          <NavLink to="input" className="m-2">
            <Button>Input Field</Button>
          </NavLink>
          <NavLink to="tab" className="m-2">
            <Button>Tabs Switching</Button>
          </NavLink>
          <NavLink to="show-hide" className="m-2">
            <Button>Accordion</Button>
          </NavLink>
          <NavLink to="percentage-calculator" className="m-2">
            <Button>Percentage Calculator</Button>
          </NavLink>
          <NavLink to="model" className="m-2">
            <Button>Model</Button>
          </NavLink>
          <NavLink to="char-count" className="m-2">
            <Button>Char Counter</Button>
          </NavLink>
          <NavLink to="change-color" className="m-2">
            <Button>Color Changer</Button>
          </NavLink>
          <NavLink to="password" className="m-2">
            <Button>Password</Button>
          </NavLink>
          <NavLink to="dropdown" className="m-2">
            <Button>Drop Down</Button>
          </NavLink>
          <NavLink to="toggle" className="m-2">
            <Button>Change Theme</Button>
          </NavLink>
          <NavLink to="counter" className="m-2">
            <Button>Go to Counter</Button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
