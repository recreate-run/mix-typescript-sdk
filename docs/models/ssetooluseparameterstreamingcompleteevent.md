# SSEToolUseParameterStreamingCompleteEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEToolUseParameterStreamingCompleteEvent } from "mix-typescript-sdk/models";

let value: SSEToolUseParameterStreamingCompleteEvent = {
  event: "content",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    input: "<value>",
    name: "brave_search",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                              | [models.SSEToolUseParameterStreamingCompleteEventEvent](../models/ssetooluseparameterstreamingcompleteeventevent.md) | :heavy_check_mark:                                                                                                   | Event type identifier                                                                                                |                                                                                                                      |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique sequential event identifier for ordering and reconnection                                                     | 1234567890                                                                                                           |
| `retry`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Client retry interval in milliseconds                                                                                | 30000                                                                                                                |
| `data`                                                                                                               | [models.SSEToolUseParameterStreamingCompleteEventData](../models/ssetooluseparameterstreamingcompleteeventdata.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |