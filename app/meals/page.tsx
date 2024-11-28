import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import getMeals from "@/lib/meal";

const MealsPage = async () => {
    const meals = await getMeals();
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
            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
};
export default MealsPage