# RespondToNotificationRequest

## Example Usage

```typescript
import { RespondToNotificationRequest } from "mix-typescript-sdk/models/operations";

let value: RespondToNotificationRequest = {
  id: "<id>",
  requestBody: {
    type: "acknowledge",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Notification ID                                                                                            |
| `requestBody`                                                                                              | [operations.RespondToNotificationRequestBody](../../models/operations/respondtonotificationrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |