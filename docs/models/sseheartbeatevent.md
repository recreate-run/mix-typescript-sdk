# SSEHeartbeatEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEHeartbeatEvent } from "mix-typescript-sdk/models";

let value: SSEHeartbeatEvent = {
  event: "subagent_created",
  id: "1234567890",
  retry: 30000,
  data: {
    type: "ping",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `event`                                                              | [models.SSEHeartbeatEventEvent](../models/sseheartbeateventevent.md) | :heavy_check_mark:                                                   | Event type identifier                                                |                                                                      |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Unique sequential event identifier for ordering and reconnection     | 1234567890                                                           |
| `retry`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Client retry interval in milliseconds                                | 30000                                                                |
| `data`                                                               | [models.SSEHeartbeatEventData](../models/sseheartbeateventdata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |