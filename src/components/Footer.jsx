import { footeritems } from './FooterExports';

const Footer = () => {
  return (
    <footer className="bg-basicDark h-full xl:ml-64 xl:visible md:visible sm:visible invisible">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {footeritems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-productGreen hover:duration-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-white hover:duration-300">
            &copy; 2020 Rubi Logistics, Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
