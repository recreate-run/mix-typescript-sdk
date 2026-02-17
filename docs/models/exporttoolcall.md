# ExportToolCall

Complete tool call information for export

## Example Usage

```typescript
import { ExportToolCall } from "mix-typescript-sdk/models";

let value: ExportToolCall = {
  finished: true,
  id: "<id>",
  input: "<value>",
  name: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `finished`                                                | *boolean*                                                 | :heavy_check_mark:                                        | Whether tool execution finished                           |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | Tool call identifier                                      |
| `input`                                                   | *string*                                                  | :heavy_check_mark:                                        | Tool input as JSON string                                 |
| `inputJson`                                               | [models.InputJson](../models/inputjson.md)                | :heavy_minus_sign:                                        | Parsed tool input (optional)                              |
| `name`                                                    | *string*                                                  | :heavy_check_mark:                                        | Tool name                                                 |
| `result`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Tool execution result (optional)                          |
| `screenshotUrls`                                          | *string*[]                                                | :heavy_minus_sign:                                        | Screenshot URLs captured during tool execution (optional) |
| `type`                                                    | *string*                                                  | :heavy_check_mark:                                        | Tool type                                                 |