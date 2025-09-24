# SSESummarizeEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSESummarizeEvent } from "mix-typescript-sdk/models";

let value: SSESummarizeEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    done: true,
    progress: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `event`                                                              | [models.SSESummarizeEventEvent](../models/ssesummarizeeventevent.md) | :heavy_check_mark:                                                   | Event type identifier                                                |                                                                      |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Unique sequential event identifier for ordering and reconnection     | 1234567890                                                           |
| `retry`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Client retry interval in milliseconds                                | 30000                                                                |
| `data`                                                               | [models.SSESummarizeEventData](../models/ssesummarizeeventdata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |