# SSESessionCreatedEventData

## Example Usage

```typescript
import { SSESessionCreatedEventData } from "mix-typescript-sdk/models";

let value: SSESessionCreatedEventData = {
  createdAt: 782547,
  sessionId: "<id>",
  title: "<value>",
  type: "session_created",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `createdAt`                                 | *number*                                    | :heavy_check_mark:                          | Unix timestamp when the session was created |                                             |
| `sessionId`                                 | *string*                                    | :heavy_check_mark:                          | ID of the newly created session             |                                             |
| `title`                                     | *string*                                    | :heavy_check_mark:                          | Title of the newly created session          |                                             |
| `type`                                      | *string*                                    | :heavy_check_mark:                          | Event type                                  | session_created                             |