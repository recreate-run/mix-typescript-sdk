# SSEContentEventData

## Example Usage

```typescript
import { SSEContentEventData } from "mix-typescript-sdk/models";

let value: SSEContentEventData = {
  content: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `assistantMessageId`                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the assistant message this content belongs to                       |
| `content`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | Streaming content delta                                                   |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Content event type                                                        |