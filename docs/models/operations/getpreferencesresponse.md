# GetPreferencesResponse

User preferences and available providers

## Example Usage

```typescript
import { GetPreferencesResponse } from "mix-typescript-sdk/models/operations";

let value: GetPreferencesResponse = {
  availableProviders: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `availableProviders`                                                                           | Record<string, [operations.AvailableProviders](../../models/operations/availableproviders.md)> | :heavy_check_mark:                                                                             | Map of available AI providers and their models                                                 |
| `preferences`                                                                                  | [operations.Preferences](../../models/operations/preferences.md)                               | :heavy_minus_sign:                                                                             | User preferences (null if no preferences exist)                                                |