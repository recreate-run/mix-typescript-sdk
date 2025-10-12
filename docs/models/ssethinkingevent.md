# SSEThinkingEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEThinkingEvent } from "mix-typescript-sdk/models";

let value: SSEThinkingEvent = {
  event: "connected",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    sessionId: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `event`                                                            | [models.SSEThinkingEventEvent](../models/ssethinkingeventevent.md) | :heavy_check_mark:                                                 | Event type identifier                                              |                                                                    |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique sequential event identifier for ordering and reconnection   | 1234567890                                                         |
| `retry`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Client retry interval in milliseconds                              | 30000                                                              |
| `data`                                                             | [models.SSEThinkingEventData](../models/ssethinkingeventdata.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |