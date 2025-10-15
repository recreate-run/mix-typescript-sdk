# CreateSessionCallback

## Example Usage

```typescript
import { CreateSessionCallback } from "mix-typescript-sdk/models/operations";

let value: CreateSessionCallback = {
  bashCommand:
    "echo \"Media created: $CALLBACK_TOOL_RESULT\" >> /tmp/media.log",
  toolName: "show_media",
  type: "bash_script",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `bashCommand`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Bash command to execute (for bash_script type). Has access to environment variables.                       | echo "Media created: $CALLBACK_TOOL_RESULT" >> /tmp/media.log                                              |
| `bashTimeout`                                                                                              | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Timeout in milliseconds for bash execution (default: 120000)                                               |                                                                                                            |
| `nonBlocking`                                                                                              | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Run callback asynchronously without waiting for completion                                                 |                                                                                                            |
| `toolName`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Tool to attach callback to (e.g., 'show_media', 'bash', '*' for all tools)                                 | show_media                                                                                                 |
| `type`                                                                                                     | [operations.CreateSessionType](../../models/operations/createsessiontype.md)                               | :heavy_check_mark:                                                                                         | Callback type: 'bash_script' for shell commands, 'sub_agent' for spawning sub-agents (not yet implemented) |                                                                                                            |