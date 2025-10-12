# SSEToolEventData

## Example Usage

```typescript
import { SSEToolEventData } from "mix-typescript-sdk/models";

let value: SSEToolEventData = {
  id: "<id>",
  input: "<value>",
  name: "brave_search",
  sessionId: "<id>",
  status: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Tool execution identifier                                                            |
| `input`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Tool input parameters                                                                |
| `name`                                                                               | *models.ToolName*                                                                    | :heavy_check_mark:                                                                   | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern |
| `sessionId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Session that generated this tool event (parent or subagent session)                  |
| `status`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Tool execution status                                                                |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Tool event type                                                                      |