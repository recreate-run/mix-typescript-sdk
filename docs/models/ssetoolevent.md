# SSEToolEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEToolEvent } from "mix-typescript-sdk/models";

let value: SSEToolEvent = {
  event: "tool_execution_complete",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    input: "<value>",
    name: "brave_search",
    sessionId: "<id>",
    status: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `event`                                                          | [models.SSEToolEventEvent](../models/ssetooleventevent.md)       | :heavy_check_mark:                                               | Event type identifier                                            |                                                                  |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique sequential event identifier for ordering and reconnection | 1234567890                                                       |
| `retry`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Client retry interval in milliseconds                            | 30000                                                            |
| `data`                                                           | [models.SSEToolEventData](../models/ssetooleventdata.md)         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |