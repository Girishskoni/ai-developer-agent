import { Octokit } from "@octokit/rest";

export async function createPullRequest(owner, repo, headBranch) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  const response = await octokit.pulls.create({
    owner,
    repo,
    title: "🤖 Auto Generated PR",
    head: headBranch,
    base: "main",
    body: "This PR was created automatically by the AI Developer Agent."
  });

  console.log("✅ PR Created:", response.data.html_url);
}
