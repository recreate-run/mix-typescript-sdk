# ValidatePreferredProviderResponse

Preferred provider validation status

## Example Usage

```typescript
import { ValidatePreferredProviderResponse } from "mix-typescript-sdk/models/operations";

let value: ValidatePreferredProviderResponse = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `authMethod`                                                                                                     | [operations.ValidatePreferredProviderAuthMethod](../../models/operations/validatepreferredproviderauthmethod.md) | :heavy_minus_sign:                                                                                               | Authentication method used                                                                                       |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Status message                                                                                                   |
| `provider`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Preferred provider name                                                                                          |
| `valid`                                                                                                          | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether preferred provider is authenticated                                                                      |