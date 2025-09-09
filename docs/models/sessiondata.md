# SessionData

## Example Usage

```typescript
import { SessionData } from "mix-typescript-sdk/models";

let value: SessionData = {
  assistantMessageCount: 73841,
  completionTokens: 243814,
  cost: 57.23,
  createdAt: new Date("2023-05-08T01:04:20.218Z"),
  id: "<id>",
  promptTokens: 774253,
  title: "<value>",
  toolCallCount: 841998,
  userMessageCount: 103577,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `assistantMessageCount`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of assistant messages in session                                                       |
| `completionTokens`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Total completion tokens used                                                                  |
| `cost`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Total cost of session                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Session creation timestamp                                                                    |
| `firstUserMessage`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | First user message (optional)                                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique session identifier                                                                     |
| `promptTokens`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Total prompt tokens used                                                                      |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Session title                                                                                 |
| `toolCallCount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of tool calls made in session                                                          |
| `userMessageCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of user messages in session                                                            |
| `workingDirectory`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Working directory path (optional)                                                             |