import simpleGit from "simple-git";

export async function autoCommitAndPush(branchName) {
  const git = simpleGit();

  const branches = await git.branch();

  if (branches.all.includes(branchName)) {
    await git.checkout(branchName);
  } else {
    await git.checkoutLocalBranch(branchName);
  }

  const status = await git.status();

  if (status.files.length === 0) {
    console.log("⚠️ No changes to commit");
    return;
  }

  await git.add(".");
  await git.commit("🤖 Auto commit by AI Developer Agent");
  await git.push("origin", branchName);

  console.log("✅ Auto commit & push complete");
}
