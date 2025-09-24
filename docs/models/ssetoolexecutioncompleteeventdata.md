# SSEToolExecutionCompleteEventData

## Example Usage

```typescript
import { SSEToolExecutionCompleteEventData } from "mix-typescript-sdk/models";

let value: SSEToolExecutionCompleteEventData = {
  progress: "<value>",
  success: true,
  toolCallId: "<id>",
  toolName: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `progress`                            | *string*                              | :heavy_check_mark:                    | Final execution progress description  |
| `success`                             | *boolean*                             | :heavy_check_mark:                    | Indicates if tool execution succeeded |
| `toolCallId`                          | *string*                              | :heavy_check_mark:                    | Tool call identifier                  |
| `toolName`                            | *string*                              | :heavy_check_mark:                    | Name of the completed tool            |
| `type`                                | *string*                              | :heavy_check_mark:                    | Tool execution complete event type    |