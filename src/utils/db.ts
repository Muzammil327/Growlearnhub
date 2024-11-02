import AppDataSource from "@/src/utils/ormconfig"

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize()
    console.log("Database connection established")
  } catch (error) {
    console.error("Error during Data Source initialization:", error)
    throw error
  }
}

export const closeDatabase = async () => {
  try {
    await AppDataSource.destroy()
    console.log("Database connection closed")
  } catch (error) {
    console.error("Error during Data Source destruction:", error)
  }
}
