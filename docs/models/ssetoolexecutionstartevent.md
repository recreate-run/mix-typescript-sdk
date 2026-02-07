# SSEToolExecutionStartEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEToolExecutionStartEvent } from "mix-typescript-sdk/models";

let value: SSEToolExecutionStartEvent = {
  event: "tool_execution_start",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    toolCallId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `event`                                                                              | *"tool_execution_start"*                                                             | :heavy_check_mark:                                                                   | Event type identifier                                                                |                                                                                      |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique sequential event identifier for ordering and reconnection                     | 1234567890                                                                           |
| `retry`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | Client retry interval in milliseconds                                                | 30000                                                                                |
| `data`                                                                               | [models.SSEToolExecutionStartEventData](../models/ssetoolexecutionstarteventdata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |