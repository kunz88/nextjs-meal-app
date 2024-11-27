import Link from "next/link";
import classes from "./page.module.css";

const MealsPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Dellicius meal created{' '}
                    <span className={classes.mai}></span>
                </h1>
                <p>Chose your favorites recipe and cook it yourself. It is easy to do</p>
                <p className={classes.cta}><Link href='/meals/share'>Share Your Favorite Recipe </Link></p>
            </header>
            <main className={classes.main}></main>
        </>
    );
};
export default MealsPage