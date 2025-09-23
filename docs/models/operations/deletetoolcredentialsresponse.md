# DeleteToolCredentialsResponse

Tool API key deleted successfully

## Example Usage

```typescript
import { DeleteToolCredentialsResponse } from "mix-typescript-sdk/models/operations";

let value: DeleteToolCredentialsResponse = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `message`                  | *string*                   | :heavy_minus_sign:         | Success message            |
| `provider`                 | *string*                   | :heavy_minus_sign:         | Tool provider name         |
| `status`                   | *string*                   | :heavy_minus_sign:         | Operation status (success) |
| `toolType`                 | *string*                   | :heavy_minus_sign:         | Tool category type         |