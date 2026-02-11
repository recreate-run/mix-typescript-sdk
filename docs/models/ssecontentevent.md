# SSEContentEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEContentEvent } from "mix-typescript-sdk/models";

let value: SSEContentEvent = {
  event: "session_created",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `event`                                                          | [models.SSEContentEventEvent](../models/ssecontenteventevent.md) | :heavy_check_mark:                                               | Event type identifier                                            |                                                                  |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique sequential event identifier for ordering and reconnection | 1234567890                                                       |
| `retry`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Client retry interval in milliseconds                            | 30000                                                            |
| `data`                                                           | [models.SSEContentEventData](../models/ssecontenteventdata.md)   | :heavy_check_mark:                                               | N/A                                                              |                                                                  |