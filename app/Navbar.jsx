import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center py-5">
      <h3 className="text-4xl font-bold text-sky-500">DavMoz</h3>
      <nav>
        <ul className="flex gap-5 items-center text-lg font-bold uppercase text-sky-500">
          <Link className="hover:text-slate-50" href="/">
            Home
          </Link>
          <Link className="hover:text-slate-50" href="/about">
            About
          </Link>
          <Link className="hover:text-slate-50" href="/contact">
            Contact
          </Link>
          <Link href="https://github.com/davmoz" target="_blank">
            <FaGithub size={25} className="hover:text-slate-50" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/david-mozart-andraws-3a7031b9/"
            target="_blank"
          >
            <FaLinkedin size={25} className="hover:text-slate-50" />
          </Link>
          <Link href="https://twitter.com/DMozartAndraws" target="_blank">
            <FaTwitter size={25} className="hover:text-slate-50" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
