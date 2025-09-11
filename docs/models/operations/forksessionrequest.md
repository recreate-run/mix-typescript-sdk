# ForkSessionRequest

## Example Usage

```typescript
import { ForkSessionRequest } from "mix-typescript-sdk/models/operations";

let value: ForkSessionRequest = {
  id: "<id>",
  requestBody: {
    messageIndex: 489391,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Source session ID to fork from                                                         |
| `requestBody`                                                                          | [operations.ForkSessionRequestBody](../../models/operations/forksessionrequestbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |