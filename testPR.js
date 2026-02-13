import 'dotenv/config';
import { createPullRequest } from "./src/utils/githubPR.js";

await createPullRequest(
  "Girishskoni",        // repo owner (NOT you)
  "ai-developer-agent", // repo name
  "nagaraj_automate_pr"    // branch you pushed
);
