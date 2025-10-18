# SSEThinkingEventData

## Example Usage

```typescript
import { SSEThinkingEventData } from "mix-typescript-sdk/models";

let value: SSEThinkingEventData = {
  content: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `assistantMessageId`                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the assistant message this thinking belongs to                      |
| `content`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | Thinking or reasoning content                                             |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Thinking event type                                                       |