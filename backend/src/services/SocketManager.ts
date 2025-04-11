import { IncomingMessage, Server, ServerResponse } from "http";
import { RawData, WebSocket, WebSocketServer } from "ws";

class SocketManager {
  private static _instance: SocketManager;
  private wss: WebSocketServer | null = null;
  private httpServer: Server<typeof IncomingMessage, typeof ServerResponse>;

  constructor(server: Server<typeof IncomingMessage, typeof ServerResponse>) {
    this.initSocket();
    this.httpServer = server;
  }

  public static getInstance(
    server: Server<typeof IncomingMessage, typeof ServerResponse>
  ) {
    if (this._instance) this._instance = new SocketManager(server);
    return this._instance;
  }

  public initSocket() {
    this.wss = new WebSocketServer({ server: this.httpServer });
    this.wss?.on("connection", (ws: WebSocket) => {
      this.handleSocketConnection(ws);
    });
  }

  public handleSocketConnection(ws: WebSocket) {
    ws.on("message", (data: RawData) => {
      const message = JSON.parse(data.toString());

      switch (message.type) {
      }
    });
  }
}

export default SocketManager;
