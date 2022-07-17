import "./style.css";
const Header = ({ blackHeader}) => {
  return (
    <header className={ blackHeader ? 'black' : ''}>
      <div className="header--logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" />
      </div>
      <div className="header--avatar">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" />
      </div>
    </header>
  );
};
export default Header;
