# SSEToolEventData

## Example Usage

```typescript
import { SSEToolEventData } from "mix-typescript-sdk/models";

let value: SSEToolEventData = {
  id: "<id>",
  input: "<value>",
  name: "brave_search",
  status: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                        | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Tool execution identifier                                                                                                                   |
| `input`                                                                                                                                     | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Tool input parameters                                                                                                                       |
| `name`                                                                                                                                      | *models.ToolName*                                                                                                                           | :heavy_check_mark:                                                                                                                          | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern                                                        |
| `parentToolCallId`                                                                                                                          | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Optional. Parent tool call ID when this tool is executed by a subagent (nested execution). Present when the tool is spawned by a Task tool. |
| `status`                                                                                                                                    | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Tool execution status                                                                                                                       |
| `type`                                                                                                                                      | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Tool event type                                                                                                                             |