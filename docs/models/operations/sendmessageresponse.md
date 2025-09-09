# SendMessageResponse

Message sent and processed

## Example Usage

```typescript
import { SendMessageResponse } from "mix-typescript-sdk/models/operations";

let value: SendMessageResponse = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `data`                                            | [models.MessageData](../../models/messagedata.md) | :heavy_minus_sign:                                | N/A                                               |
| `error`                                           | [models.RESTError](../../models/resterror.md)     | :heavy_minus_sign:                                | N/A                                               |
| `message`                                         | *string*                                          | :heavy_minus_sign:                                | Optional message                                  |