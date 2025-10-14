# SSEToolExecutionStartEventData

## Example Usage

```typescript
import { SSEToolExecutionStartEventData } from "mix-typescript-sdk/models";

let value: SSEToolExecutionStartEventData = {
  progress: "<value>",
  toolCallId: "<id>",
  toolName: "brave_search",
  type: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `parentToolCallId`                                                                   | *string*                                                                             | :heavy_minus_sign:                                                                   | ID of the parent tool call that spawned this subagent (for nested events)            |
| `progress`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Execution progress description                                                       |
| `toolCallId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | Tool call identifier                                                                 |
| `toolName`                                                                           | *models.ToolName*                                                                    | :heavy_check_mark:                                                                   | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Tool execution start event type                                                      |