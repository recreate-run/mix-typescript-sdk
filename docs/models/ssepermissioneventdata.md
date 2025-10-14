# SSEPermissionEventData

## Example Usage

```typescript
import { SSEPermissionEventData } from "mix-typescript-sdk/models";

let value: SSEPermissionEventData = {
  action: "<value>",
  description: "scope upwardly publicity now gah circumference fooey",
  id: "<id>",
  sessionId: "<id>",
  toolName: "brave_search",
  type: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `action`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Requested action description                                                         |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Human-readable permission description                                                |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Permission request identifier                                                        |
| `params`                                                                             | [models.Params](../models/params.md)                                                 | :heavy_minus_sign:                                                                   | Additional parameters for the permission request                                     |
| `parentToolCallId`                                                                   | *string*                                                                             | :heavy_minus_sign:                                                                   | ID of the parent tool call that spawned this subagent (for nested events)            |
| `path`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | File path for permission request                                                     |
| `sessionId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Session identifier for the permission request                                        |
| `toolName`                                                                           | *models.ToolName*                                                                    | :heavy_check_mark:                                                                   | Tool name - either a core tool or MCP tool following {serverName}_{toolName} pattern |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Permission event type                                                                |