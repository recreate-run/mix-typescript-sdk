# GetOAuthHealthProviders

## Example Usage

```typescript
import { GetOAuthHealthProviders } from "mix-typescript-sdk/models/operations";

let value: GetOAuthHealthProviders = {
  expiresIn: "2h30m15s",
  provider: "<value>",
  status: "not_found",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Error message if status is 'error'                                                            |                                                                                               |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Token expiration time                                                                         |                                                                                               |
| `expiresIn`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable time until expiration                                                          | 2h30m15s                                                                                      |
| `lastRefresh`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last time token was refreshed                                                                 |                                                                                               |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Provider name                                                                                 |                                                                                               |
| `status`                                                                                      | [operations.ProvidersStatus](../../models/operations/providersstatus.md)                      | :heavy_check_mark:                                                                            | Token status                                                                                  |                                                                                               |