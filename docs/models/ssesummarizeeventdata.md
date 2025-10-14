# SSESummarizeEventData

## Example Usage

```typescript
import { SSESummarizeEventData } from "mix-typescript-sdk/models";

let value: SSESummarizeEventData = {
  done: true,
  progress: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `done`                                                                    | *boolean*                                                                 | :heavy_check_mark:                                                        | Indicates if summarization is complete                                    |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |
| `progress`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | Summarization progress description                                        |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Summarization event type                                                  |