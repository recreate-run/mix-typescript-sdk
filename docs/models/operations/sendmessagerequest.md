# SendMessageRequest

## Example Usage

```typescript
import { SendMessageRequest } from "mix-typescript-sdk/models/operations";

let value: SendMessageRequest = {
  id: "<id>",
  requestBody: {
    apps: [],
    media: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    planMode: false,
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Session ID                                                                             |
| `requestBody`                                                                          | [operations.SendMessageRequestBody](../../models/operations/sendmessagerequestbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |