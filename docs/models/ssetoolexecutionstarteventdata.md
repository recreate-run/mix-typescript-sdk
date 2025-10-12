# SSEToolExecutionStartEventData

## Example Usage

```typescript
import { SSEToolExecutionStartEventData } from "mix-typescript-sdk/models";

let value: SSEToolExecutionStartEventData = {
  progress: "<value>",
  sessionId: "<id>",
  toolCallId: "<id>",
  toolName: "brave_search",
  type: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `progress`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Execution progress description                                                       |
| `sessionId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Session that generated this execution event (parent or subagent session)             |
| `toolCallId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | Tool call identifier                                                                 |
| `toolName`                                                                           | *models.ToolName*                                                                    | :heavy_check_mark:                                                                   | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Tool execution start event type                                                      |