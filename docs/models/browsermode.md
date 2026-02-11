# BrowserMode

Browser automation mode:
- 'electron-embedded-browser': Electron app with embedded Chromium browser
- 'local-browser-service': Local browser-service (GoRod-based)
- 'remote-cdp-websocket': Remote CDP WebSocket URL (cloud browser providers)

## Example Usage

```typescript
import { BrowserMode } from "mix-typescript-sdk/models";

let value: BrowserMode = "local-browser-service";
```

## Values

```typescript
"electron-embedded-browser" | "local-browser-service" | "remote-cdp-websocket"
```