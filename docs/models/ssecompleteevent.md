# SSECompleteEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSECompleteEvent } from "mix-typescript-sdk/models";

let value: SSECompleteEvent = {
  event: "complete",
  id: "1234567890",
  retry: 30000,
  data: {
    done: true,
    type: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `event`                                                          | *"complete"*                                                     | :heavy_check_mark:                                               | Event type identifier                                            |                                                                  |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique sequential event identifier for ordering and reconnection | 1234567890                                                       |
| `retry`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Client retry interval in milliseconds                            | 30000                                                            |
| `data`                                                           | [models.SSECompleteEventData](../models/ssecompleteeventdata.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |