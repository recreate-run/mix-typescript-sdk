# SSECompleteEventData

## Example Usage

```typescript
import { SSECompleteEventData } from "mix-typescript-sdk/models";

let value: SSECompleteEventData = {
  done: false,
  message: {
    id: "<id>",
    role: "<value>",
    sessionId: "<id>",
    toolCalls: [
      {
        finished: false,
        id: "<id>",
        input: "<value>",
        name: "brave_search",
        type: "<value>",
      },
    ],
    userInput: "<value>",
  },
  type: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `content`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Final response content                                                    |
| `done`                                                                    | *boolean*                                                                 | :heavy_check_mark:                                                        | Indicates message processing completion                                   |
| `message`                                                                 | [models.BackendMessage](../models/backendmessage.md)                      | :heavy_minus_sign:                                                        | Backend message structure representing a complete message exchange        |
| `messageId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Completed message identifier                                              |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |
| `reasoning`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Optional reasoning content                                                |
| `reasoningDuration`                                                       | *number*                                                                  | :heavy_minus_sign:                                                        | Duration of reasoning process in milliseconds                             |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Completion type                                                           |