# SSEToolParameterDeltaEventData

## Example Usage

```typescript
import { SSEToolParameterDeltaEventData } from "mix-typescript-sdk/models";

let value: SSEToolParameterDeltaEventData = {
  input: "<value>",
  sessionId: "<id>",
  toolCallId: "<id>",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `input`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | Partial JSON parameter delta - may not be parseable until complete       |
| `sessionId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Session that generated this parameter delta (parent or subagent session) |
| `toolCallId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Tool call identifier for correlation                                     |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Tool parameter delta event type                                          |