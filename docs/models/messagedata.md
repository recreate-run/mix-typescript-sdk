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
| `apps`                                  | *string*[]                              | :heavy_minus_sign:                      | Array of app identifiers or references  |
| `media`                                 | *string*[]                              | :heavy_minus_sign:                      | Array of media file references or URLs  |
| `planMode`                              | *boolean*                               | :heavy_minus_sign:                      | Whether the message is in planning mode |
| `text`                                  | *string*                                | :heavy_check_mark:                      | The text content of the message         |