# SSESessionDeletedEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSESessionDeletedEvent } from "mix-typescript-sdk/models";

let value: SSESessionDeletedEvent = {
  event: "session_deleted",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
    type: "session_deleted",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `event`                                                                      | *"session_deleted"*                                                          | :heavy_check_mark:                                                           | Event type identifier                                                        |                                                                              |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Unique sequential event identifier for ordering and reconnection             | 1234567890                                                                   |
| `retry`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | Client retry interval in milliseconds                                        | 30000                                                                        |
| `data`                                                                       | [models.SSESessionDeletedEventData](../models/ssesessiondeletedeventdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |