import Link from 'next/link';

const NavMobile = ({ navData }) => {
  return (
    <nav className="bg-accent w-full p-4">
      <ul className="flex flex-col gap-y-6">
        {navData.map(({ name, href }, i) => (
          <li key={i}>
            <Link href={href}>
              <a className="text-white hover:text-red-200">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
