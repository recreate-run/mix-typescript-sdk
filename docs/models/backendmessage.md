# BackendMessage

Backend message structure representing a complete message exchange

## Example Usage

```typescript
import { BackendMessage } from "mix-typescript-sdk/models";

let value: BackendMessage = {
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
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `assistantResponse`                                             | *string*                                                        | :heavy_minus_sign:                                              | Assistant's response message (optional)                         |
| `cacheCreationTokens`                                           | *number*                                                        | :heavy_minus_sign:                                              | Tokens used for prompt cache creation (optional)                |
| `cacheReadTokens`                                               | *number*                                                        | :heavy_minus_sign:                                              | Tokens read from prompt cache (optional)                        |
| `callbackResults`                                               | [models.CallbackResultData](../models/callbackresultdata.md)[]  | :heavy_minus_sign:                                              | Callback execution results (optional)                           |
| `cost`                                                          | *number*                                                        | :heavy_minus_sign:                                              | Cost for this specific message in USD                           |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | Unique message identifier                                       |
| `inputTokens`                                                   | *number*                                                        | :heavy_minus_sign:                                              | Input tokens used for this message (includes cache creation)    |
| `model`                                                         | *string*                                                        | :heavy_minus_sign:                                              | Model used for this message (e.g., 'claude-sonnet-4')           |
| `outputTokens`                                                  | *number*                                                        | :heavy_minus_sign:                                              | Output tokens generated for this message (includes cache reads) |
| `reasoning`                                                     | *string*                                                        | :heavy_minus_sign:                                              | Reasoning process (optional)                                    |
| `reasoningDuration`                                             | *number*                                                        | :heavy_minus_sign:                                              | Reasoning duration in milliseconds (optional)                   |
| `role`                                                          | *string*                                                        | :heavy_check_mark:                                              | Message role (user, assistant, tool)                            |
| `sessionId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Session identifier                                              |
| `toolCalls`                                                     | [models.ToolCallData](../models/toolcalldata.md)[]              | :heavy_minus_sign:                                              | Tool calls made during message processing                       |
| `userInput`                                                     | *string*                                                        | :heavy_check_mark:                                              | User's input message                                            |