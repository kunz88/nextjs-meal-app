import sql from "better-sqlite3";

const db = sql("meals.db");

const getMeals = async (): Promise<Meal[]> => {
  if (!db) {
    throw new Error("The database connection is null.");
  }
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return db
      .prepare<Meal[], Meal>(
        `
      SELECT * FROM meals`
      )
      .all();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getMeals;
