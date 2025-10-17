# GetToolsStatusResponse

Tools status and authentication information

## Example Usage

```typescript
import { GetToolsStatusResponse } from "mix-typescript-sdk/models/operations";

let value: GetToolsStatusResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `categories`                                                                                               | Record<string, [operations.GetToolsStatusCategories](../../models/operations/gettoolsstatuscategories.md)> | :heavy_minus_sign:                                                                                         | Map of tool categories and their tools                                                                     |