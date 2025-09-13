# HandleOAuthCallbackResponse

OAuth completion status

## Example Usage

```typescript
import { HandleOAuthCallbackResponse } from "mix-typescript-sdk/models/operations";

let value: HandleOAuthCallbackResponse = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `expiresIn`                    | *number*                       | :heavy_minus_sign:             | Seconds until token expiration |
| `message`                      | *string*                       | :heavy_minus_sign:             | Status message                 |
| `provider`                     | *string*                       | :heavy_minus_sign:             | Provider name                  |
| `status`                       | *string*                       | :heavy_minus_sign:             | Operation status               |