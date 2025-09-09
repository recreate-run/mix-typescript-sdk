# HealthCheckResponse

Health information

## Example Usage

```typescript
import { HealthCheckResponse } from "mix-typescript-sdk/models/operations";

let value: HealthCheckResponse = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.HealthCheckData](../../models/operations/healthcheckdata.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `error`                                                                  | [models.RESTError](../../models/resterror.md)                            | :heavy_minus_sign:                                                       | N/A                                                                      |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | Optional message                                                         |