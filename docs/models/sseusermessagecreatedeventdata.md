# SSEUserMessageCreatedEventData

## Example Usage

```typescript
import { SSEUserMessageCreatedEventData } from "mix-typescript-sdk/models";

let value: SSEUserMessageCreatedEventData = {
  content: "<value>",
  messageId: "<id>",
  type: "user_message_created",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `content`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | Content of the user message                                               |                                                                           |
| `messageId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | ID of the created user message                                            |                                                                           |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |                                                                           |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | User message created event type                                           | user_message_created                                                      |