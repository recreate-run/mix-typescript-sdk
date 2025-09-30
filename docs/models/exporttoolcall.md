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

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `finished`                                     | *boolean*                                      | :heavy_check_mark:                             | Whether tool execution finished                |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | Tool call identifier                           |
| `input`                                        | *string*                                       | :heavy_check_mark:                             | Tool input as JSON string                      |
| `inputJson`                                    | [models.InputJson](../models/inputjson.md)     | :heavy_minus_sign:                             | Parsed tool input (optional)                   |
| `isError`                                      | *boolean*                                      | :heavy_minus_sign:                             | Whether execution resulted in error (optional) |
| `metadata`                                     | *string*                                       | :heavy_minus_sign:                             | Additional tool metadata (optional)            |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Tool name                                      |
| `result`                                       | *string*                                       | :heavy_minus_sign:                             | Tool execution result (optional)               |
| `type`                                         | *string*                                       | :heavy_check_mark:                             | Tool type                                      |