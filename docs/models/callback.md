# Callback

## Example Usage

```typescript
import { Callback } from "mix-typescript-sdk/models";

let value: Callback = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `bashCommand`                                          | *string*                                               | :heavy_minus_sign:                                     | Bash command to execute (for bash_script type)         |
| `bashTimeout`                                          | *number*                                               | :heavy_minus_sign:                                     | Timeout in milliseconds for bash execution             |
| `nonBlocking`                                          | *boolean*                                              | :heavy_minus_sign:                                     | Run callback asynchronously                            |
| `toolName`                                             | *string*                                               | :heavy_minus_sign:                                     | Tool to attach callback to                             |
| `type`                                                 | [models.SessionDataType](../models/sessiondatatype.md) | :heavy_minus_sign:                                     | Callback type                                          |