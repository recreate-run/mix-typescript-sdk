# SSESessionDeletedEventData

## Example Usage

```typescript
import { SSESessionDeletedEventData } from "mix-typescript-sdk/models";

let value: SSESessionDeletedEventData = {
  sessionId: "<id>",
  type: "session_deleted",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `sessionId`               | *string*                  | :heavy_check_mark:        | ID of the deleted session |                           |
| `type`                    | *string*                  | :heavy_check_mark:        | Event type                | session_deleted           |