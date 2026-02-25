export const GET = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: import.meta.env.GITHUB_CLIENT_ID,
      client_secret: import.meta.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();

  return new Response(`
    <script>
      const content = {
        token: "${data.access_token}",
        provider: "github"
      };
      window.opener.postMessage("authorization:github:success:" + JSON.stringify(content), "*");
    </script>
  `, {
    headers: { "Content-Type": "text/html" }
  });
};