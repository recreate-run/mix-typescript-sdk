# GetToolCredentialsStatusCategories

## Example Usage

```typescript
import { GetToolCredentialsStatusCategories } from "mix-typescript-sdk/models/operations";

let value: GetToolCredentialsStatusCategories = {
  description: "Search the web for real-time information",
  displayName: "Web Search",
  icon: "🔍",
  tools: [
    {
      apiKeyFormat: "BSA...",
      apiKeyRequired: true,
      authenticated: true,
      description: "Privacy-focused web search with real-time results",
      displayName: "Brave Search",
      provider: "brave",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Category description                                                                                 | Search the web for real-time information                                                             |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Category display name                                                                                | Web Search                                                                                           |
| `icon`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Category icon                                                                                        | 🔍                                                                                                   |
| `tools`                                                                                              | [operations.GetToolCredentialsStatusTool](../../models/operations/gettoolcredentialsstatustool.md)[] | :heavy_minus_sign:                                                                                   | Tools in this category                                                                               |                                                                                                      |