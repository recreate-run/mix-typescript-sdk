# SSESessionCreatedEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSESessionCreatedEvent } from "mix-typescript-sdk/models";

let value: SSESessionCreatedEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    createdAt: 419339,
    sessionId: "<id>",
    title: "<value>",
    type: "session_created",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `event`                                                                        | [models.SSESessionCreatedEventEvent](../models/ssesessioncreatedeventevent.md) | :heavy_check_mark:                                                             | Event type identifier                                                          |                                                                                |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique sequential event identifier for ordering and reconnection               | 1234567890                                                                     |
| `retry`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Client retry interval in milliseconds                                          | 30000                                                                          |
| `data`                                                                         | [models.SSESessionCreatedEventData](../models/ssesessioncreatedeventdata.md)   | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |