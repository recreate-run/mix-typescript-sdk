# MessageData

## Example Usage

```typescript
import { MessageData } from "mix-typescript-sdk/models";

let value: MessageData = {
  id: "<id>",
  role: "user",
  sessionId: "<id>",
  userInput: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `assistantResponse`                                | *string*                                           | :heavy_minus_sign:                                 | Assistant's response message (optional)            |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | Unique message identifier                          |
| `reasoning`                                        | *string*                                           | :heavy_minus_sign:                                 | Reasoning process (optional)                       |
| `reasoningDuration`                                | *number*                                           | :heavy_minus_sign:                                 | Reasoning duration in milliseconds (optional)      |
| `role`                                             | [models.MessageRole](../models/messagerole.md)     | :heavy_check_mark:                                 | Message role                                       |
| `sessionId`                                        | *string*                                           | :heavy_check_mark:                                 | Session identifier                                 |
| `toolCalls`                                        | [models.ToolCallData](../models/toolcalldata.md)[] | :heavy_minus_sign:                                 | Tool calls made during message processing          |
| `userInput`                                        | *string*                                           | :heavy_check_mark:                                 | User's input message                               |