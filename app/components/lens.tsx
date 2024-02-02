import { PropsWithChildren } from "react";

type IProps = PropsWithChildren;

const Lens = ({ children }: IProps) => {
  return (
    <section className="col-span-full row-span-full bg-clr-accent-500 backdrop-blur flex items-center justify-center w-full h-full z-50">
      {children}
    </section>
  );
};

export default Lens;
