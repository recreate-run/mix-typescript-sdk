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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `input`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | Partial JSON parameter delta - may not be parseable until complete        |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |
| `toolCallId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Tool call identifier for correlation                                      |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Tool parameter delta event type                                           |