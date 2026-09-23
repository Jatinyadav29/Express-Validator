import config from "./src/config/config.js";
import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";

const port = config.PORT;

await connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
