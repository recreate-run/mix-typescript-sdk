# GetToolsStatusTool

## Example Usage

```typescript
import { GetToolsStatusTool } from "mix-typescript-sdk/models/operations";

let value: GetToolsStatusTool = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `apiKeyRequired`                               | *boolean*                                      | :heavy_minus_sign:                             | Whether tool requires API key authentication   |
| `authenticated`                                | *boolean*                                      | :heavy_minus_sign:                             | Whether tool is authenticated and ready to use |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | Tool description                               |
| `displayName`                                  | *string*                                       | :heavy_minus_sign:                             | User-friendly tool name                        |
| `provider`                                     | *string*                                       | :heavy_minus_sign:                             | Tool provider name                             |