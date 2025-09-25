# MessageData

Message data structure for user input

## Example Usage

```typescript
import { MessageData } from "mix-typescript-sdk/models";

let value: MessageData = {
  apps: [],
  media: [
    "<value 1>",
    "<value 2>",
  ],
  planMode: true,
  text: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `apps`                                  | *string*[]                              | :heavy_check_mark:                      | Array of app identifiers or references  |
| `media`                                 | *string*[]                              | :heavy_check_mark:                      | Array of media file references or URLs  |
| `planMode`                              | *boolean*                               | :heavy_check_mark:                      | Whether the message is in planning mode |
| `text`                                  | *string*                                | :heavy_check_mark:                      | The text content of the message         |