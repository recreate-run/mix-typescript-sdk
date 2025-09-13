# HandleOAuthCallbackRequest

## Example Usage

```typescript
import { HandleOAuthCallbackRequest } from "mix-typescript-sdk/models/operations";

let value: HandleOAuthCallbackRequest = {
  code: "<value>",
  provider: "<value>",
  state: "Massachusetts",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `code`                                 | *string*                               | :heavy_check_mark:                     | Authorization code from OAuth provider |
| `provider`                             | *string*                               | :heavy_check_mark:                     | Provider name (anthropic)              |
| `state`                                | *string*                               | :heavy_check_mark:                     | OAuth state for verification           |