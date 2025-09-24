# StreamMessageResponse

Response from streaming message endpoint indicating broadcast status

## Example Usage

```typescript
import { StreamMessageResponse } from "mix-typescript-sdk/models";

let value: StreamMessageResponse = {
  sessionId: "<id>",
  status: "broadcasted",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `sessionId`                          | *string*                             | :heavy_check_mark:                   | Session identifier                   |
| `status`                             | [models.Status](../models/status.md) | :heavy_check_mark:                   | Broadcast status                     |