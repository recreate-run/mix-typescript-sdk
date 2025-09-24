# SSEToolExecutionCompleteEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEToolExecutionCompleteEvent } from "mix-typescript-sdk/models";

let value: SSEToolExecutionCompleteEvent = {
  event: "complete",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    success: true,
    toolCallId: "<id>",
    toolName: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `event`                                                                                      | [models.SSEToolExecutionCompleteEventEvent](../models/ssetoolexecutioncompleteeventevent.md) | :heavy_check_mark:                                                                           | Event type identifier                                                                        |                                                                                              |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique sequential event identifier for ordering and reconnection                             | 1234567890                                                                                   |
| `retry`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | Client retry interval in milliseconds                                                        | 30000                                                                                        |
| `data`                                                                                       | [models.SSEToolExecutionCompleteEventData](../models/ssetoolexecutioncompleteeventdata.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |