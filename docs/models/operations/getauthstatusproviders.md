# GetAuthStatusProviders

## Example Usage

```typescript
import { GetAuthStatusProviders } from "mix-typescript-sdk/models/operations";

let value: GetAuthStatusProviders = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `authMethod`                                                                             | [operations.GetAuthStatusAuthMethod](../../models/operations/getauthstatusauthmethod.md) | :heavy_minus_sign:                                                                       | Authentication method (oauth, api_key, none)                                             |
| `authenticated`                                                                          | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether provider is authenticated                                                        |
| `displayName`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | User-friendly provider name                                                              |