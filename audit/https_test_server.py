#!/usr/bin/env python3
"""Local TLS server for read-only installed-PWA/offline QA. Never publish it."""
import argparse
import http.server
import ssl
from pathlib import Path

parser=argparse.ArgumentParser()
parser.add_argument("--cert",required=True)
parser.add_argument("--key",required=True)
parser.add_argument("--port",type=int,default=9443)
args=parser.parse_args()

server=http.server.ThreadingHTTPServer(("127.0.0.1",args.port),http.server.SimpleHTTPRequestHandler)
tls=ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
tls.load_cert_chain(certfile=args.cert,keyfile=args.key)
server.socket=tls.wrap_socket(server.socket,server_side=True)
print(f"HTTPS offline audit server listening at https://127.0.0.1:{args.port}",flush=True)
server.serve_forever()
