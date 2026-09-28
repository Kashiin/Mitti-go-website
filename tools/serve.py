"""Local preview server for the built site:  python tools/serve.py [port]
Like `python -m http.server`, but tells the browser not to cache anything,
so after `node tools/build.mjs` a normal reload always shows the new pages."""
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def send_error(self, code, message=None, explain=None):
        # like GitHub Pages: unknown URLs get the site's 404 page
        if code == 404 and os.path.exists(os.path.join(ROOT, "404.html")):
            body = open(os.path.join(ROOT, "404.html"), "rb").read()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().send_error(code, message, explain)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4180
    print(f"Mitti GO preview: http://localhost:{port}/")
    http.server.ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()
