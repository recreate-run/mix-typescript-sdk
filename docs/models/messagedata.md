# MessageData

Message data structure for user input

## Example Usage

```typescript
import { MessageData } from "mix-typescript-sdk/models";

let value: MessageData = {
  text: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `planMode`                              | *boolean*                               | :heavy_minus_sign:                      | Whether the message is in planning mode |
| `text`                                  | *string*                                | :heavy_check_mark:                      | The text content of the message         |