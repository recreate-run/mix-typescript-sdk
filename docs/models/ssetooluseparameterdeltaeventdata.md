# SSEToolUseParameterDeltaEventData

## Example Usage

```typescript
import { SSEToolUseParameterDeltaEventData } from "mix-typescript-sdk/models";

let value: SSEToolUseParameterDeltaEventData = {
  input: "<value>",
  toolCallId: "<id>",
  type: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `assistantMessageId`                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the assistant message this tool parameter delta belongs to          |
| `input`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | Partial JSON parameter delta - may not be parseable until complete        |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |
| `toolCallId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Tool call identifier for correlation                                      |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Tool use parameter delta event type                                       |