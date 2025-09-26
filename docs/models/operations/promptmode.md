# PromptMode

Custom prompt handling mode:
- 'default': Use base system prompt only (customSystemPrompt ignored)
- 'append': Append customSystemPrompt to base system prompt (50KB limit)
- 'replace': Replace base system prompt with customSystemPrompt (100KB limit)

## Example Usage

```typescript
import { PromptMode } from "mix-typescript-sdk/models/operations";

let value: PromptMode = "append";
```

## Values

```typescript
"default" | "append" | "replace"
```