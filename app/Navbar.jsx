import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center p-5">
      <h2 className="text-4xl">Davmoz</h2>
      <ul className="flex gap-3 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
