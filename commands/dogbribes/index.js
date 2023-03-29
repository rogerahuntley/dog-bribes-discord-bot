import { DB_SITE, DB_EMAIL, DB_PASSWORD } from "../../devops/environmentVariables.js"
import { formatSave } from "./savePrinter.js";

const getSaveData = async (user_id) => {
  console.log(DB_SITE, DB_EMAIL, DB_PASSWORD, user_id)

  const response = await fetch(`${DB_SITE}/api/savedata`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: DB_EMAIL,
      password: DB_PASSWORD,
      user_id: user_id,
    }),
  });

  const data = await response.json();
  return formatSave(data);
}

export { getSaveData }