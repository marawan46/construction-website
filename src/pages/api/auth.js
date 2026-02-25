export const prerender = false;

export const GET = async () => {
  const client_id = import.meta.env.GITHUB_CLIENT_ID;
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: url,
    },
  });
};