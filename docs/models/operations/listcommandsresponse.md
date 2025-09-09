# ListCommandsResponse

List of commands

## Example Usage

```typescript
import { ListCommandsResponse } from "mix-typescript-sdk/models/operations";

let value: ListCommandsResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.ListCommandsData](../../models/operations/listcommandsdata.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `error`                                                                      | [models.RESTError](../../models/resterror.md)                                | :heavy_minus_sign:                                                           | N/A                                                                          |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Optional message                                                             |