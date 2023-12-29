import { cn } from "@/utils/helpers";
import React from "react";

type colorOptions = "default" | "grey" | "orange";

const Button = ({
  children,
  color,
  fullWidth = false,
  onClick,
  className,
}: {
  children: React.ReactNode;
  color: colorOptions;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "btn-base transform transition-transform active:scale-90 " + className,
        {
          default: color === "default",
          grey: color === "grey",
          orange: color === "orange",
          "!w-full px-[5px]": fullWidth,
        }
      )}
      onClick={onClick}
    >
      <div
        className={cn("", {
          default: color === "default",
          grey: color === "grey",
          orange: color === "orange",
          "!w-full": fullWidth,
        })}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
