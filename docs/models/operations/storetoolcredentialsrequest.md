# StoreToolCredentialsRequest

## Example Usage

```typescript
import { StoreToolCredentialsRequest } from "mix-typescript-sdk/models/operations";

let value: StoreToolCredentialsRequest = {
  apiKey: "<value>",
  provider: "<value>",
  toolType: "multimodal_analyzer",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `apiKey`                                                   | *string*                                                   | :heavy_check_mark:                                         | API key for authentication                                 |
| `provider`                                                 | *string*                                                   | :heavy_check_mark:                                         | Tool provider name (e.g., brave, gemini)                   |
| `toolType`                                                 | [operations.ToolType](../../models/operations/tooltype.md) | :heavy_check_mark:                                         | Tool category type                                         |