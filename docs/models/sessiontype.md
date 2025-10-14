# SessionType

Session type:
- 'main': Root-level user interactions
- 'forked': User-created conversation branches
- 'subagent': Delegated task workers

## Example Usage

```typescript
import { SessionType } from "mix-typescript-sdk/models";

let value: SessionType = "forked";
```

## Values

```typescript
"main" | "forked" | "subagent"
```