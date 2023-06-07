export const loader = () => {
    return {
       PORT : process.env.PORT,
       DATABASE_URL: process.env.DATABASE_URL,
    }
}