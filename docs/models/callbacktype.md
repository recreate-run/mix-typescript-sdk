# CallbackType

Callback type: 'bash_script' for shell commands, 'sub_agent' for spawning sub-agents, 'send_message' for injecting messages

## Example Usage

```typescript
import { CallbackType } from "mix-typescript-sdk/models";

let value: CallbackType = "sub_agent";
```

## Values

```typescript
"bash_script" | "sub_agent" | "send_message"
```