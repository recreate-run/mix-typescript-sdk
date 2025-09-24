# StreamEventsRequest

## Example Usage

```typescript
import { StreamEventsRequest } from "mix-typescript-sdk/models/operations";

let value: StreamEventsRequest = {
  sessionId: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `sessionId`                                              | *string*                                                 | :heavy_check_mark:                                       | Session ID to stream events for                          |
| `lastEventID`                                            | *string*                                                 | :heavy_minus_sign:                                       | Last received event ID for reconnection and event replay |