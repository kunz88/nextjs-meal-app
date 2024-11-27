'use client'
import Link from "next/link";

import classes from './nav-link.module.css';
import { usePathname } from "next/navigation";
const NavLink = ({ pathName, title }: { pathName: string, title: string }) => {
    const path = usePathname();
    return (

        <Link href={pathName} className={path.startsWith(pathName) ? classes.active : undefined}>{title}</Link>

    );
};
export default NavLink