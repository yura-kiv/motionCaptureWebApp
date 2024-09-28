import React, { ReactNode, FC, useContext, useEffect, useRef } from "react";
import s from "./Button.module.scss";
import { NodesContext } from "../../contexts/nodesContext";

type ButtonProps = {
  id: string;
  text?: string;
  size?: "sm" | "lg";
  icon?: ReactNode;
  category?: "primary" | "secondary" | "outline";
  isDisabled?: boolean;
  addClassName?: string;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data?: any
  ) => void;
};

const Button: FC<ButtonProps> = ({
  id,
  text,
  size = "lg",
  addClassName,
  category = "primary",
  icon,
  isDisabled,
  onClick,
}) => {
  const hoverId = `${id}_button`;
  const ref = useRef<HTMLButtonElement>(null);
  const { addHoverNode, removeHoverNode } = useContext(NodesContext);

  useEffect(() => {
    return () => {
      removeHoverNode(hoverId);
    };
  }, []);

  return (
    <button
      ref={(ref) =>
        addHoverNode({
          id: hoverId,
          ref,
          hoverClassName: "button",
        })
      }
      className={`${s.button} ${s[size]} ${s[category]} ${
        isDisabled && s.disabled
      } ${!text && icon && s.onlyIcon} ${addClassName}`}
      onClick={onClick || undefined}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
