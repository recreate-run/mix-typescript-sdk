# SSEToolExecutionStartEventData

## Example Usage

```typescript
import { SSEToolExecutionStartEventData } from "mix-typescript-sdk/models";

let value: SSEToolExecutionStartEventData = {
  progress: "<value>",
  toolCallId: "<id>",
  toolName: "<value>",
  type: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `progress`                      | *string*                        | :heavy_check_mark:              | Execution progress description  |
| `toolCallId`                    | *string*                        | :heavy_check_mark:              | Tool call identifier            |
| `toolName`                      | *string*                        | :heavy_check_mark:              | Name of the tool being executed |
| `type`                          | *string*                        | :heavy_check_mark:              | Tool execution start event type |