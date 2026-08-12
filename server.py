import http.server
import os
import socketserver


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main():
    port = int(os.environ.get("PORT", 8000))
    with socketserver.TCPServer(("0.0.0.0", port), Handler) as httpd:
        print(f"Serving on 0.0.0.0:{port}")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
