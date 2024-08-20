import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, name: "Products" },
  { id: 2, name: "Pricing" },
  { id: 3, name: "Clients" },
  { id: 4, name: "Resources" },
  { id: 5, name: "Documentation" },
  { id: 6, name: "Enterprise" },
];

const Navbar = () => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Fu</p>
        <Image
          src="/fuzzieLogo.png"
          width={15}
          height={15}
          alt="logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">zie</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[50%] translate-y-[50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href="#">{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
