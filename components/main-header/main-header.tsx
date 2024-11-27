import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';

import classes from './main-header.module.css';
import NavLink from "../nav-link/nav-link";



const MainHeader = () => {
    const links = [{ pathName: '/meals', title: 'Browse meal' }, { pathName: '/community', title: 'Foodies community' }]
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <Image src={logoImg} alt="A plate with food on it" priority />
                Next Level Foood
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        {links.map((link) => <NavLink pathName={link.pathName} title={link.title} />)}
                    </li>
                </ul>
            </nav>
        </header>

    );
};
export default MainHeader