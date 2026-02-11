# SSECompleteEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSECompleteEvent } from "mix-typescript-sdk/models";

let value: SSECompleteEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    done: false,
    type: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `event`                                                            | [models.SSECompleteEventEvent](../models/ssecompleteeventevent.md) | :heavy_check_mark:                                                 | Event type identifier                                              |                                                                    |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique sequential event identifier for ordering and reconnection   | 1234567890                                                         |
| `retry`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Client retry interval in milliseconds                              | 30000                                                              |
| `data`                                                             | [models.SSECompleteEventData](../models/ssecompleteeventdata.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |