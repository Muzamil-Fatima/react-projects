import Button from "../Components/Button";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <div className="border-8 border-amber-600 p-12 bg-pink-200 flex flex-wrap">
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
