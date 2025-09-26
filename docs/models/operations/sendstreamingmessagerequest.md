# SendStreamingMessageRequest

## Example Usage

```typescript
import { SendStreamingMessageRequest } from "mix-typescript-sdk/models/operations";

let value: SendStreamingMessageRequest = {
  id: "<id>",
  requestBody: {
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Session ID to send message to                                                                            |
| `requestBody`                                                                                            | [operations.SendStreamingMessageRequestBody](../../models/operations/sendstreamingmessagerequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |