# DenyPermissionResponse

Permission deny status

## Example Usage

```typescript
import { DenyPermissionResponse } from "mix-typescript-sdk/models/operations";

let value: DenyPermissionResponse = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.DenyPermissionData](../../models/operations/denypermissiondata.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `error`                                                                        | [models.RESTError](../../models/resterror.md)                                  | :heavy_minus_sign:                                                             | N/A                                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | Optional message                                                               |