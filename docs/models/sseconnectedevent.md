# SSEConnectedEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEConnectedEvent } from "mix-typescript-sdk/models";

let value: SSEConnectedEvent = {
  event: "summarize",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `event`                                                              | [models.SSEConnectedEventEvent](../models/sseconnectedeventevent.md) | :heavy_check_mark:                                                   | Event type identifier                                                |                                                                      |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Unique sequential event identifier for ordering and reconnection     | 1234567890                                                           |
| `retry`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Client retry interval in milliseconds                                | 30000                                                                |
| `data`                                                               | [models.SSEConnectedEventData](../models/sseconnectedeventdata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |