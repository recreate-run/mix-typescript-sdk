# GetToolsStatusCategories

## Example Usage

```typescript
import { GetToolsStatusCategories } from "mix-typescript-sdk/models/operations";

let value: GetToolsStatusCategories = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | User-friendly category name                                                      |
| `tools`                                                                          | [operations.GetToolsStatusTool](../../models/operations/gettoolsstatustool.md)[] | :heavy_minus_sign:                                                               | Available tools in this category                                                 |