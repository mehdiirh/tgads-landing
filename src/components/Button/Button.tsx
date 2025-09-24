import type {ButtonHTMLAttributes} from "react";
import "./Button.css"

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} />
};

export default Button;