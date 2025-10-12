# SSEToolExecutionCompleteEventData

## Example Usage

```typescript
import { SSEToolExecutionCompleteEventData } from "mix-typescript-sdk/models";

let value: SSEToolExecutionCompleteEventData = {
  progress: "<value>",
  sessionId: "<id>",
  success: true,
  toolCallId: "<id>",
  toolName: "brave_search",
  type: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `progress`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Final execution progress description                                                 |
| `sessionId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Session that generated this completion event (parent or subagent session)            |
| `success`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Indicates if tool execution succeeded                                                |
| `toolCallId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | Tool call identifier                                                                 |
| `toolName`                                                                           | *models.ToolName*                                                                    | :heavy_check_mark:                                                                   | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Tool execution complete event type                                                   |