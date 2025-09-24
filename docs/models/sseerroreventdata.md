# SSEErrorEventData

## Example Usage

```typescript
import { SSEErrorEventData } from "mix-typescript-sdk/models";

let value: SSEErrorEventData = {
  error: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `attempt`                         | *number*                          | :heavy_minus_sign:                | Current retry attempt number      |
| `error`                           | *string*                          | :heavy_check_mark:                | Error message description         |
| `maxAttempts`                     | *number*                          | :heavy_minus_sign:                | Maximum number of retry attempts  |
| `retryAfter`                      | *number*                          | :heavy_minus_sign:                | Milliseconds to wait before retry |
| `type`                            | *string*                          | :heavy_minus_sign:                | Error type classification         |