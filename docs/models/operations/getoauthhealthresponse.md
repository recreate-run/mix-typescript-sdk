# GetOAuthHealthResponse

OAuth health status

## Example Usage

```typescript
import { GetOAuthHealthResponse } from "mix-typescript-sdk/models/operations";

let value: GetOAuthHealthResponse = {
  providers: {
    "key": {
      expiresIn: "2h30m15s",
      provider: "<value>",
      status: "error",
    },
  },
  status: "healthy",
  timestamp: new Date("2026-04-10T14:05:44.748Z"),
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `providers`                                                                                              | Record<string, [operations.GetOAuthHealthProviders](../../models/operations/getoauthhealthproviders.md)> | :heavy_check_mark:                                                                                       | Map of provider OAuth health status                                                                      |                                                                                                          |
| `status`                                                                                                 | [operations.Status](../../models/operations/status.md)                                                   | :heavy_check_mark:                                                                                       | Overall health status                                                                                    | healthy                                                                                                  |
| `timestamp`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | Health check timestamp                                                                                   |                                                                                                          |