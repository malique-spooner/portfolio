const redirects = new Map([
  ["/projects/agri", "/Origin-Acre/"],
  ["/projects/agri/", "/Origin-Acre/"],
  ["/projects/fantasy-5", "/Fantasy-Live/"],
  ["/projects/fantasy-5/", "/Fantasy-Live/"],
]);
const legacyAgriPrefixes = ["/buyer-pledges", "/farms", "/settings", "/farmers", "/export-lots"];

export default {
  async fetch(request, env) {
    const incoming = new URL(request.url);
    const destination = redirects.get(incoming.pathname);
    if (destination) {
      return Response.redirect(new URL(`${destination}${incoming.search}`, incoming), 301);
    }
    const legacyAgriPath = legacyAgriPrefixes.find(
      (prefix) => incoming.pathname === prefix || incoming.pathname.startsWith(`${prefix}/`),
    );
    if (legacyAgriPath) {
      const target = `/Origin-Acre${incoming.pathname}${incoming.search}`;
      return Response.redirect(new URL(target, incoming), 301);
    }
    const response = await env.ASSETS.fetch(request);
    if (!response.headers.get("content-type")?.includes("text/html")) return response;

    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "no-store, max-age=0");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};
