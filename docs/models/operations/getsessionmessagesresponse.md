# GetSessionMessagesResponse

List of session messages

## Example Usage

```typescript
import { GetSessionMessagesResponse } from "mix-typescript-sdk/models/operations";

let value: GetSessionMessagesResponse = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `data`                                              | [models.MessageData](../../models/messagedata.md)[] | :heavy_minus_sign:                                  | N/A                                                 |
| `error`                                             | [models.RESTError](../../models/resterror.md)       | :heavy_minus_sign:                                  | N/A                                                 |
| `message`                                           | *string*                                            | :heavy_minus_sign:                                  | Optional message                                    |