export const GET = async ({ redirect }) => {
  const client_id = import.meta.env.GITHUB_CLIENT_ID;
  return redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`);
};