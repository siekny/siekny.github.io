"""Preview this site locally the way GitHub Pages serves it.

Addresses without ".html" (for example /ai-voice-coaching-agent) are served
from the matching .html file, as GitHub Pages does. Pages are never cached,
so a reload always shows your latest edit.
Missing pages show 404.html, as on GitHub Pages.

Run from anywhere:   python _serve.py          (port 8000)
                     python _serve.py 8080     (another port)
Then open http://localhost:8000 and press Ctrl+C here to stop.

The leading underscore keeps GitHub Pages from publishing this file.
"""
import http.server
import os
import sys
from functools import partial

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000


class PagesHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        local = super().translate_path(path)
        if not os.path.exists(local) and os.path.isfile(local + ".html"):
            return local + ".html"
        return local

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_error(self, code, message=None, explain=None):
        # Show the site's own 404.html for missing pages, as GitHub Pages does.
        page = os.path.join(ROOT, "404.html")
        if code == 404 and os.path.isfile(page):
            with open(page, "rb") as f:
                body = f.read()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(body)
            return
        super().send_error(code, message, explain)


if __name__ == "__main__":
    handler = partial(PagesHandler, directory=ROOT)
    with http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler) as httpd:
        print(f"Serving {ROOT} at http://localhost:{PORT}  (Ctrl+C to stop)")
        httpd.serve_forever()
