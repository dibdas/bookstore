import '../styles/Header.css';

const Header = () => (
  <>
    <nav className="navbar">
      <div className="left-container">
        <span id="bookstore" className="navbar-brand mx-3 ">Bookstore CMS</span>
        <div className="menu">
          <ul className="items">
            <li className="books">Books</li>
            <li className="categories">categories</li>
          </ul>
        </div>
      </div>
      <div className="right_user">
        <img className="user_image" src="/user.svg" alt="User" />
      </div>
    </nav>
  </>

);
export default Header;
