const redirects = new Map([
  ["/projects/agri", "/Origin-Acre/"],
  ["/projects/agri/", "/Origin-Acre/"],
  ["/projects/fantasy-5", "/Fantasy-Live/"],
  ["/projects/fantasy-5/", "/Fantasy-Live/"],
]);

export default {
  async fetch(request, env) {
    const incoming = new URL(request.url);
    const destination = redirects.get(incoming.pathname);
    if (destination) {
      return Response.redirect(new URL(`${destination}${incoming.search}`, incoming), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
