# SSEThinkingEventData

## Example Usage

```typescript
import { SSEThinkingEventData } from "mix-typescript-sdk/models";

let value: SSEThinkingEventData = {
  content: "<value>",
  sessionId: "<id>",
  type: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `content`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Thinking or reasoning content                                           |
| `sessionId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Session that generated this thinking event (parent or subagent session) |
| `type`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | Thinking event type                                                     |