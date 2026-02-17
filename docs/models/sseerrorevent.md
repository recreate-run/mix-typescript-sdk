# SSEErrorEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEErrorEvent } from "mix-typescript-sdk/models";

let value: SSEErrorEvent = {
  event: "error",
  id: "1234567890",
  retry: 30000,
  data: {
    error: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `event`                                                          | *"error"*                                                        | :heavy_check_mark:                                               | Event type identifier                                            |                                                                  |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique sequential event identifier for ordering and reconnection | 1234567890                                                       |
| `retry`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Client retry interval in milliseconds                            | 30000                                                            |
| `data`                                                           | [models.SSEErrorEventData](../models/sseerroreventdata.md)       | :heavy_check_mark:                                               | N/A                                                              |                                                                  |