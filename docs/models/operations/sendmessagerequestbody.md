# SendMessageRequestBody

## Example Usage

```typescript
import { SendMessageRequestBody } from "mix-typescript-sdk/models/operations";

let value: SendMessageRequestBody = {
  text: "<value>",
  thinkingBudget: 10000,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `planMode`                                                                                                      | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | Whether the message is in planning mode                                                                         |                                                                                                                 |
| `text`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The text content of the message                                                                                 |                                                                                                                 |
| `thinkingBudget`                                                                                                | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Thinking budget in tokens (0=disabled, 1024-31999=enabled). If not provided, determined by keywords in message. | 10000                                                                                                           |