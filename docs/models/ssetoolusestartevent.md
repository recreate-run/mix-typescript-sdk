# SSEToolUseStartEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEToolUseStartEvent } from "mix-typescript-sdk/models";

let value: SSEToolUseStartEvent = {
  event: "tool_use_start",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    name: "brave_search",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `event`                                                                  | *"tool_use_start"*                                                       | :heavy_check_mark:                                                       | Event type identifier                                                    |                                                                          |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | Unique sequential event identifier for ordering and reconnection         | 1234567890                                                               |
| `retry`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Client retry interval in milliseconds                                    | 30000                                                                    |
| `data`                                                                   | [models.SSEToolUseStartEventData](../models/ssetoolusestarteventdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |