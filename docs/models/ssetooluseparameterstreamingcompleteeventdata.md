# SSEToolUseParameterStreamingCompleteEventData

## Example Usage

```typescript
import { SSEToolUseParameterStreamingCompleteEventData } from "mix-typescript-sdk/models";

let value: SSEToolUseParameterStreamingCompleteEventData = {
  id: "<id>",
  input: "<value>",
  name: "brave_search",
  type: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assistantMessageId`                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | ID of the assistant message this tool belongs to                                     |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Tool call identifier                                                                 |
| `input`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Complete JSON-encoded tool input parameters                                          |
| `name`                                                                               | *models.ToolName*                                                                    | :heavy_check_mark:                                                                   | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern |
| `parentToolCallId`                                                                   | *string*                                                                             | :heavy_minus_sign:                                                                   | ID of the parent tool call that spawned this subagent (for nested events)            |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Tool use parameter streaming complete event type                                     |