# SSEToolParameterDeltaEventData

## Example Usage

```typescript
import { SSEToolParameterDeltaEventData } from "mix-typescript-sdk/models";

let value: SSEToolParameterDeltaEventData = {
  input: "<value>",
  toolCallId: "<id>",
  type: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `input`                                                            | *string*                                                           | :heavy_check_mark:                                                 | Partial JSON parameter delta - may not be parseable until complete |
| `toolCallId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | Tool call identifier for correlation                               |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Tool parameter delta event type                                    |