# ListLLMToolsTool

## Example Usage

```typescript
import { ListLLMToolsTool } from "mix-typescript-sdk/models/operations";

let value: ListLLMToolsTool = {
  description: "Execute bash commands in a persistent shell session",
  name: "Bash",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | Tool description                                                 | Execute bash commands in a persistent shell session              |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Tool name                                                        | Bash                                                             |
| `parameters`                                                     | [operations.ParametersT](../../models/operations/parameterst.md) | :heavy_minus_sign:                                               | Tool parameter schema                                            |                                                                  |
| `required`                                                       | *string*[]                                                       | :heavy_minus_sign:                                               | Required parameters                                              |                                                                  |