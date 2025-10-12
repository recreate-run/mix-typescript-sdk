# SSESubagentCreatedEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSESubagentCreatedEvent } from "mix-typescript-sdk/models";

let value: SSESubagentCreatedEvent = {
  event: "error",
  id: "1234567890",
  retry: 30000,
  data: {
    parentToolCallId: "<id>",
    subagentSessionId: "<id>",
    type: "subagent_created",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `event`                                                                          | [models.SSESubagentCreatedEventEvent](../models/ssesubagentcreatedeventevent.md) | :heavy_check_mark:                                                               | Event type identifier                                                            |                                                                                  |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Unique sequential event identifier for ordering and reconnection                 | 1234567890                                                                       |
| `retry`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Client retry interval in milliseconds                                            | 30000                                                                            |
| `data`                                                                           | [models.SSESubagentCreatedEventData](../models/ssesubagentcreatedeventdata.md)   | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |