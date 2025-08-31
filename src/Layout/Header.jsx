import logo from "../images/react.png";

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgrey",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} alt="logo" />
      <span className="h2 pt-4 text-white-50">React course - TaskOpedia </span>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};
export default Header;
