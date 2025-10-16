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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `assistantResponse`                                            | *string*                                                       | :heavy_minus_sign:                                             | Assistant's response message (optional)                        |
| `callbackResults`                                              | [models.CallbackResultData](../models/callbackresultdata.md)[] | :heavy_minus_sign:                                             | Callback execution results (optional)                          |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | Unique message identifier                                      |
| `reasoning`                                                    | *string*                                                       | :heavy_minus_sign:                                             | Reasoning process (optional)                                   |
| `reasoningDuration`                                            | *number*                                                       | :heavy_minus_sign:                                             | Reasoning duration in milliseconds (optional)                  |
| `role`                                                         | *string*                                                       | :heavy_check_mark:                                             | Message role (user, assistant, tool)                           |
| `sessionId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Session identifier                                             |
| `toolCalls`                                                    | [models.ToolCallData](../models/toolcalldata.md)[]             | :heavy_minus_sign:                                             | Tool calls made during message processing                      |
| `userInput`                                                    | *string*                                                       | :heavy_check_mark:                                             | User's input message                                           |