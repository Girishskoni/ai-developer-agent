import 'dotenv/config';
import { autoCommitAndPush } from "./src/utils/gitAuto.js";
import { createPullRequest } from "./src/utils/githubPR.js";

const branch = "auto_pr_" + Date.now();

await autoCommitAndPush(branch);

await createPullRequest(
  "Girishskoni",
  "ai-developer-agent",
  branch   // ✅ Use same branch
);
