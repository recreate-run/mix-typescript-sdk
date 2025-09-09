# GrantPermissionResponse

Permission grant status

## Example Usage

```typescript
import { GrantPermissionResponse } from "mix-typescript-sdk/models/operations";

let value: GrantPermissionResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.GrantPermissionData](../../models/operations/grantpermissiondata.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `error`                                                                          | [models.RESTError](../../models/resterror.md)                                    | :heavy_minus_sign:                                                               | N/A                                                                              |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | Optional message                                                                 |