# DeleteToolCredentialsRequest

## Example Usage

```typescript
import { DeleteToolCredentialsRequest } from "mix-typescript-sdk/models/operations";

let value: DeleteToolCredentialsRequest = {
  toolType: "<value>",
  provider: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `toolType`                                           | *string*                                             | :heavy_check_mark:                                   | Tool category type (web_search, multimodal_analyzer) |
| `provider`                                           | *string*                                             | :heavy_check_mark:                                   | Tool provider name (e.g., brave, gemini)             |