import Link from 'next/link';

const Nav = ({ navData, header }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[96px] ">
        {navData.map(({ name, href }, i) => (
          <li key={i}>
            <Link href={href}>
              <a
                className={`${
                  header ? 'text-primary' : 'text-white'
                } cursor-pointer hover:text-accent transition`}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
