import { NerdIcon } from "@/public/assets/icons";

const NerdAlert = () => {
  return (
    <div className="flex gap-[7.4375rem] items-center justify-between bg-clr-accent-600 py-[.625rem] pr-[0.5625rem] pl-[1.1875rem] rounded-xl border border-clr-accent-700">
      <div className="flex gap-3 text-clr-scndry grow-0 items-center">
        <div>
          <NerdIcon />
        </div>
        <p>Looks like we&apos;ve got another nerd...</p>
      </div>
      <button className="text-clr-scndry text-sm px-[1.375rem] py-[0.625rem] bg-base rounded-[0.625rem] border border-clr-accent-100 hover:bg-clr-accent-600 transition active:scale-95">
        Use Lens
      </button>
    </div>
  );
};

export default NerdAlert;
