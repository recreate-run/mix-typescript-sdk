# SendStreamingMessageRequest

## Example Usage

```typescript
import { SendStreamingMessageRequest } from "mix-typescript-sdk/models/operations";

let value: SendStreamingMessageRequest = {
  id: "<id>",
  messageData: {
    text: "<value>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | Session ID to send message to                     |
| `messageData`                                     | [models.MessageData](../../models/messagedata.md) | :heavy_check_mark:                                | N/A                                               |