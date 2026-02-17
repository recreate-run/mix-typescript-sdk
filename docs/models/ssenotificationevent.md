# SSENotificationEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSENotificationEvent } from "mix-typescript-sdk/models";

let value: SSENotificationEvent = {
  event: "notification",
  id: "1234567890",
  retry: 30000,
  data: {
    createdAt: 808803,
    id: "<id>",
    message: "<value>",
    notificationType: "warning",
    responseType: "choice",
    sessionId: "<id>",
    timeout: 705877,
    title: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `event`                                                                  | *"notification"*                                                         | :heavy_check_mark:                                                       | Event type identifier                                                    |                                                                          |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | Unique sequential event identifier for ordering and reconnection         | 1234567890                                                               |
| `retry`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Client retry interval in milliseconds                                    | 30000                                                                    |
| `data`                                                                   | [models.SSENotificationEventData](../models/ssenotificationeventdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |