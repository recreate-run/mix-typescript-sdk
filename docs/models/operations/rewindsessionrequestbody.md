# RewindSessionRequestBody

## Example Usage

```typescript
import { RewindSessionRequestBody } from "mix-typescript-sdk/models/operations";

let value: RewindSessionRequestBody = {
  messageId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `cleanupMedia`                                                                           | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether to clean up media files created after the rewind point (based on file timestamp) |
| `messageId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the last message to keep. All messages after this message will be deleted.         |