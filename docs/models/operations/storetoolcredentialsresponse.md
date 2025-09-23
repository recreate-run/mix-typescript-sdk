# StoreToolCredentialsResponse

Tool API key stored successfully

## Example Usage

```typescript
import { StoreToolCredentialsResponse } from "mix-typescript-sdk/models/operations";

let value: StoreToolCredentialsResponse = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `message`                  | *string*                   | :heavy_minus_sign:         | Success message            |
| `provider`                 | *string*                   | :heavy_minus_sign:         | Tool provider name         |
| `status`                   | *string*                   | :heavy_minus_sign:         | Operation status (success) |
| `toolType`                 | *string*                   | :heavy_minus_sign:         | Tool category type         |