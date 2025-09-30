# RewindSessionRequest

## Example Usage

```typescript
import { RewindSessionRequest } from "mix-typescript-sdk/models/operations";

let value: RewindSessionRequest = {
  id: "<id>",
  requestBody: {
    messageId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Session ID to rewind                                                                       |
| `requestBody`                                                                              | [operations.RewindSessionRequestBody](../../models/operations/rewindsessionrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |