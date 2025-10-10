# SendMessageResponse

Message accepted for processing. Agent runs asynchronously and streams results via SSE.

## Example Usage

```typescript
import { SendMessageResponse } from "mix-typescript-sdk/models/operations";

let value: SendMessageResponse = {
  sessionId: "<id>",
  status: "processing",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `sessionId`                        | *string*                           | :heavy_check_mark:                 | Session ID for the processing task |                                    |
| `status`                           | *string*                           | :heavy_check_mark:                 | Processing status                  | processing                         |