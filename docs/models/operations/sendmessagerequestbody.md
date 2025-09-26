# SendMessageRequestBody

## Example Usage

```typescript
import { SendMessageRequestBody } from "mix-typescript-sdk/models/operations";

let value: SendMessageRequestBody = {
  text: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `planMode`                              | *boolean*                               | :heavy_minus_sign:                      | Whether the message is in planning mode |
| `text`                                  | *string*                                | :heavy_check_mark:                      | The text content of the message         |