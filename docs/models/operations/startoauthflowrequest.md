# StartOAuthFlowRequest

## Example Usage

```typescript
import { StartOAuthFlowRequest } from "mix-typescript-sdk/models/operations";

let value: StartOAuthFlowRequest = {
  provider: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `provider`                                 | *string*                                   | :heavy_check_mark:                         | Provider name (currently only 'anthropic') |