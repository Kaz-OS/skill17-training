import { SQL } from "bun";

const db = new SQL("sqlite://myapp.db");
export { db };
