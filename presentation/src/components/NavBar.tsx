import { menuItems } from './MenuItems';
import styles from './../css/Types.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems.map((menu, index) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export {Navbar};
