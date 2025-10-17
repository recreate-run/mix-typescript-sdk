# GetToolCredentialsStatusResponse

Tool credentials status

## Example Usage

```typescript
import { GetToolCredentialsStatusResponse } from "mix-typescript-sdk/models/operations";

let value: GetToolCredentialsStatusResponse = {
  categories: {
    "key": {
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
    },
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `categories`                                                                                                                   | Record<string, [operations.GetToolCredentialsStatusCategories](../../models/operations/gettoolcredentialsstatuscategories.md)> | :heavy_minus_sign:                                                                                                             | Tool categories grouped by type                                                                                                |