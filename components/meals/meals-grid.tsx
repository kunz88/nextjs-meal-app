import MealItem from "./meals-item";

import classes from './meals-grid.module.css'
import { getMeals } from "@/lib/meal";

const MealsGrid = async () => {
    const meals = await getMeals();
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
};
export default MealsGrid