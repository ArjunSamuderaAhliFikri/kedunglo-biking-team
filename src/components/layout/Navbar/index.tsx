type NavbarType = {
  children: React.ReactNode;
};

const Navbar = (props: NavbarType): JSX.Element => {
  return (
    <>
      <nav>{props.children}</nav>
    </>
  );
};

export default Navbar;
