import footerImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img src={footerImg} alt="FITLOG Logo" />
        <p className="text-lg font-bold">FITLOG</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </nav>
    </footer>
  );
};

export default Footer;
