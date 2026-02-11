# SSEUserMessageCreatedEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEUserMessageCreatedEvent } from "mix-typescript-sdk/models";

let value: SSEUserMessageCreatedEvent = {
  event: "thinking",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    messageId: "<id>",
    type: "user_message_created",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `event`                                                                                | [models.SSEUserMessageCreatedEventEvent](../models/sseusermessagecreatedeventevent.md) | :heavy_check_mark:                                                                     | Event type identifier                                                                  |                                                                                        |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique sequential event identifier for ordering and reconnection                       | 1234567890                                                                             |
| `retry`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | Client retry interval in milliseconds                                                  | 30000                                                                                  |
| `data`                                                                                 | [models.SSEUserMessageCreatedEventData](../models/sseusermessagecreatedeventdata.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |