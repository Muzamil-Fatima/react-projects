import Button from "../Components/Button";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="tab" className="m-2">
          <Button>Tabs Switching</Button>
        </NavLink>
        <NavLink to="show-hide" className="m-2">
          <Button>Accordion</Button>
        </NavLink>
        <NavLink to="preview" className="m-2">
          <Button>Input Preview</Button>
        </NavLink>
        <NavLink to="character" className="m-2">
          <Button>Character</Button>
        </NavLink>
        <NavLink to="capitalize" className="m-2">
          <Button>Capitalize</Button>
        </NavLink>
        <NavLink to="char-count" className="m-2">
          <Button>Char Counter</Button>
        </NavLink>
        <NavLink to="change-color" className="m-2">
          <Button>Color Changer</Button>
        </NavLink>
        <NavLink to="password" className="m-2">
          <Button>Input</Button>
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
      <Outlet />
    </nav>
  );
}
