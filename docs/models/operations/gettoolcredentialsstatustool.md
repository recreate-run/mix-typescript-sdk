# GetToolCredentialsStatusTool

## Example Usage

```typescript
import { GetToolCredentialsStatusTool } from "mix-typescript-sdk/models/operations";

let value: GetToolCredentialsStatusTool = {
  apiKeyFormat: "BSA...",
  apiKeyRequired: true,
  authenticated: true,
  description: "Privacy-focused web search with real-time results",
  displayName: "Brave Search",
  provider: "brave",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `apiKeyFormat`                                    | *string*                                          | :heavy_minus_sign:                                | Expected API key format                           | BSA...                                            |
| `apiKeyRequired`                                  | *boolean*                                         | :heavy_minus_sign:                                | Whether an API key is required                    | true                                              |
| `authenticated`                                   | *boolean*                                         | :heavy_minus_sign:                                | Whether the tool has valid credentials            | true                                              |
| `description`                                     | *string*                                          | :heavy_minus_sign:                                | Tool description                                  | Privacy-focused web search with real-time results |
| `displayName`                                     | *string*                                          | :heavy_minus_sign:                                | Tool display name                                 | Brave Search                                      |
| `provider`                                        | *string*                                          | :heavy_minus_sign:                                | Provider identifier                               | brave                                             |