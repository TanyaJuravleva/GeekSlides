import { menuItems } from './MenuItems';
import styles from './../css/Types.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems.map((menu, index) => {
          return (
            <button className="menu-items" key={index}>
              <p> {menu.title}</p>
            </button>
            
          );
        })}
      </ul>
    </nav>
  );
};

export {Navbar};
