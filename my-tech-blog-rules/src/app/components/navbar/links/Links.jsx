
"use client"; 

import styles from './links.module.css';
import NavLink from './navLink/navLink';

const Links = () => {
  const links = [
    {
      name: 'Home',
      link: '/'
    }, 
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    }, 
    {
      name: 'Blog',
      link: '/blog',
    }, 
  ]; 

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.name} />
      ))}
    </div>
  );
};

export default Links;
