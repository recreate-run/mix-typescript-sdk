# RESTError

## Example Usage

```typescript
import { RESTError } from "mix-typescript-sdk/models";

let value: RESTError = {
  code: 796874,
  message: "<value>",
  type: "internal_error",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `code`                           | *number*                         | :heavy_check_mark:               | HTTP status code                 |
| `message`                        | *string*                         | :heavy_check_mark:               | Error message                    |
| `type`                           | [models.Type](../models/type.md) | :heavy_check_mark:               | Error type                       |