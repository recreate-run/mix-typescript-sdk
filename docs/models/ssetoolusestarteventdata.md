# SSEToolUseStartEventData

## Example Usage

```typescript
import { SSEToolUseStartEventData } from "mix-typescript-sdk/models";

let value: SSEToolUseStartEventData = {
  id: "<id>",
  name: "brave_search",
  type: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assistantMessageId`                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | ID of the assistant message this tool belongs to                                     |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Tool call identifier                                                                 |
| `name`                                                                               | *models.ToolName*                                                                    | :heavy_check_mark:                                                                   | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern |
| `parentToolCallId`                                                                   | *string*                                                                             | :heavy_minus_sign:                                                                   | ID of the parent tool call that spawned this subagent (for nested events)            |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Tool use start event type                                                            |