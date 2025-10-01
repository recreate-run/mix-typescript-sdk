# SSEPermissionEvent

Base SSE event with standard fields

## Example Usage

```typescript
import { SSEPermissionEvent } from "mix-typescript-sdk/models";

let value: SSEPermissionEvent = {
  event: "session_deleted",
  id: "1234567890",
  retry: 30000,
  data: {
    action: "<value>",
    description: "deed or reflate huzzah",
    id: "<id>",
    sessionId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `event`                                                                | [models.SSEPermissionEventEvent](../models/ssepermissioneventevent.md) | :heavy_check_mark:                                                     | Event type identifier                                                  |                                                                        |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Unique sequential event identifier for ordering and reconnection       | 1234567890                                                             |
| `retry`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Client retry interval in milliseconds                                  | 30000                                                                  |
| `data`                                                                 | [models.SSEPermissionEventData](../models/ssepermissioneventdata.md)   | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |