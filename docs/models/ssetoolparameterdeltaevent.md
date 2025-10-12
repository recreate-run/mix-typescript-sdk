# SSEToolParameterDeltaEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEToolParameterDeltaEvent } from "mix-typescript-sdk/models";

let value: SSEToolParameterDeltaEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    input: "<value>",
    sessionId: "<id>",
    toolCallId: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `event`                                                                                | [models.SSEToolParameterDeltaEventEvent](../models/ssetoolparameterdeltaeventevent.md) | :heavy_check_mark:                                                                     | Event type identifier                                                                  |                                                                                        |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique sequential event identifier for ordering and reconnection                       | 1234567890                                                                             |
| `retry`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | Client retry interval in milliseconds                                                  | 30000                                                                                  |
| `data`                                                                                 | [models.SSEToolParameterDeltaEventData](../models/ssetoolparameterdeltaeventdata.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |