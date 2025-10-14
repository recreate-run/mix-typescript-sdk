# GetAuthStatusResponse

Authentication status for all providers

## Example Usage

```typescript
import { GetAuthStatusResponse } from "mix-typescript-sdk/models/operations";

let value: GetAuthStatusResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `providers`                                                                  | Record<string, [operations.Providers](../../models/operations/providers.md)> | :heavy_minus_sign:                                                           | Map of provider authentication status                                        |