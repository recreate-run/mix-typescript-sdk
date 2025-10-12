# SSESubagentCreatedEventData

## Example Usage

```typescript
import { SSESubagentCreatedEventData } from "mix-typescript-sdk/models";

let value: SSESubagentCreatedEventData = {
  parentToolCallId: "<id>",
  subagentSessionId: "<id>",
  type: "subagent_created",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `parentToolCallId`                                          | *string*                                                    | :heavy_check_mark:                                          | Parent Task tool call ID that spawned this subagent         |                                                             |
| `subagentSessionId`                                         | *string*                                                    | :heavy_check_mark:                                          | Subagent session ID for correlation with nested tool events |                                                             |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | Event type                                                  | subagent_created                                            |