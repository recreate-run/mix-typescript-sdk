# ListLLMToolsResponse

List of LLM tools

## Example Usage

```typescript
import { ListLLMToolsResponse } from "mix-typescript-sdk/models/operations";

let value: ListLLMToolsResponse = {
  tools: [
    {
      description: "Execute bash commands in a persistent shell session",
      name: "Bash",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `tools`                                                                      | [operations.ListLLMToolsTool](../../models/operations/listllmtoolstool.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |