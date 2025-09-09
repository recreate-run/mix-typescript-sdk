# ListSessionsResponse

List of sessions

## Example Usage

```typescript
import { ListSessionsResponse } from "mix-typescript-sdk/models/operations";

let value: ListSessionsResponse = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `data`                                              | [models.SessionData](../../models/sessiondata.md)[] | :heavy_minus_sign:                                  | N/A                                                 |
| `error`                                             | [models.RESTError](../../models/resterror.md)       | :heavy_minus_sign:                                  | N/A                                                 |
| `message`                                           | *string*                                            | :heavy_minus_sign:                                  | Optional message                                    |