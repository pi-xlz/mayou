import { cn } from "@/utils/helpers";
import { PropsWithChildren, ReactHTMLElement } from "react";

type IProps = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: boolean;
  };

const Button = ({ children, variant, className }: IProps) => {
  return (
    <button
      className={cn(
        "py-4 px-[3.75rem] bg-clr-prmry text-clr-accent-200 font-bold rounded-lg text-[.875rem] hover:bg-[#D8D8D8] transition active:scale-95",
        className,
        {
          "bg-clr-accent-200 px-9 rounded-[0.625rem] border border-clr-accent-100 text-clr-prmry hover:bg-clr-accent-100":
            variant,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
