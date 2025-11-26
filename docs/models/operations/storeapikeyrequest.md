# StoreApiKeyRequest

## Example Usage

```typescript
import { StoreApiKeyRequest } from "mix-typescript-sdk/models/operations";

let value: StoreApiKeyRequest = {
  apiKey: "<value>",
  provider: "gemini",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `apiKey`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | API key for authentication                                                  |
| `provider`                                                                  | [operations.Provider](../../models/operations/provider.md)                  | :heavy_check_mark:                                                          | Provider name (anthropic, azure-foundry, openai, openrouter, gemini, brave) |