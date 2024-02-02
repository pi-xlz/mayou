const Footer = () => {
  return (
    <footer className="text-clr-scndry flex justify-between px-20 py-3 border-t border-t-clr-accent-400">
      <button className="text-[0.625rem] hover:text-clr-prmry transition">
        Remove Lens
      </button>
      <span className="text-[0.75rem] font-cursive">
        dnd by{" "}
        <span className="text-clr-prmry">
          <a href="#">px</a>
        </span>{" "}
        &{" "}
        <span className="text-clr-prmry">
          <a href="#">harri</a>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
