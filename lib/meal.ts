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

const getMeal = async (slug: string): Promise<Meal | undefined> => {
  if (!db) {
    throw new Error("The database connection is null.");
  }
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return db
      .prepare<String, Meal>(`SELECT * FROM meals WHERE slug = ?`)
      .get(slug);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export { getMeal, getMeals };
