# ListMcpServersResponse

## Example Usage

```typescript
import { ListMcpServersResponse } from "mix-typescript-sdk/models/operations";

let value: ListMcpServersResponse = {
  connected: false,
  name: "<value>",
  status: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `connected`                                                                 | *boolean*                                                                   | :heavy_check_mark:                                                          | Whether the MCP server is currently connected                               |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | MCP server name                                                             |
| `status`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | Server connection status (e.g., 'connected', 'failed', 'disconnected')      |
| `tools`                                                                     | [operations.Tool](../../models/operations/tool.md)[]                        | :heavy_minus_sign:                                                          | List of tools provided by this MCP server (null if server is not connected) |