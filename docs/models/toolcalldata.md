# ToolCallData

## Example Usage

```typescript
import { ToolCallData } from "mix-typescript-sdk/models";

let value: ToolCallData = {
  finished: false,
  id: "<id>",
  input: "<value>",
  name: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `finished`                                     | *boolean*                                      | :heavy_check_mark:                             | Whether tool call has finished                 |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | Unique tool call identifier                    |
| `input`                                        | *string*                                       | :heavy_check_mark:                             | Tool input parameters                          |
| `isError`                                      | *boolean*                                      | :heavy_minus_sign:                             | Whether tool call resulted in error (optional) |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Tool name                                      |
| `result`                                       | *string*                                       | :heavy_minus_sign:                             | Tool execution result (optional)               |
| `type`                                         | *string*                                       | :heavy_check_mark:                             | Tool type                                      |