# ExportSession

Comprehensive session export with all messages, tool calls, and metadata

## Example Usage

```typescript
import { ExportSession } from "mix-typescript-sdk/models";

let value: ExportSession = {
  id: "<id>",
  messages: [
    {
      content: "<value>",
      createdAt: new Date("2024-05-07T11:28:36.432Z"),
      id: "<id>",
      role: "<value>",
      updatedAt: new Date("2024-08-17T22:35:02.040Z"),
    },
  ],
  title: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `assistantMessageCount`                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of assistant messages                                                                  |
| `completionTokens`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total completion tokens used                                                                  |
| `cost`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total cost of session                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Session creation timestamp                                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Session identifier                                                                            |
| `messages`                                                                                    | [models.ExportMessage](../models/exportmessage.md)[]                                          | :heavy_check_mark:                                                                            | Complete list of messages with full details                                                   |
| `promptTokens`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total prompt tokens used                                                                      |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Session title                                                                                 |
| `toolCallCount`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of tool calls                                                                    |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Session last update timestamp                                                                 |
| `userMessageCount`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of user messages                                                                       |