export default async function handler(req, res) {
  const { code } = req.query;
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();

  if (data.error) {
    res.send(`error: ${data.error_description}`);
  } else {
    // ده الكود اللي الـ Decap CMS مستنيه عشان يفتح
    res.send(`
      <script>
        const content = {
          token: "${data.access_token}",
          provider: "github"
        };
        window.opener.postMessage("authorization:github:success:" + JSON.stringify(content), "*");
      </script>
    `);
  }
}