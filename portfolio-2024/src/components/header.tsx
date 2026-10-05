const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function Header() {
  const links = [
    { label: "Projets", href: "#project" },
    { label: "à propos", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <img src={assetUrl("assets/images/lewis.png")} alt="Lawiss" className="rounded-full w-18" />
        <div className="-space-y-1">
          <h2 className="font-bold">Lewis</h2>
          <h2 className="font-bold">Nathaniel</h2>
          <span>UI & UX Designer</span>
        </div>
      </div>
      <nav>
        <ul className="flex gap-x-4 items-center">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className={
                  index + 1 == links.length
                    ? "uppercase font-bold border-[2.5px] rounded-3xl py-2 px-4"
                    : "uppercase hover:border-b-[2.5px] pb-1 font-bold"
                }
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
