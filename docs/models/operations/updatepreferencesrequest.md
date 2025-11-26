# UpdatePreferencesRequest

## Example Usage

```typescript
import { UpdatePreferencesRequest } from "mix-typescript-sdk/models/operations";

let value: UpdatePreferencesRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `mainAgentMaxTokens`                                                 | *number*                                                             | :heavy_minus_sign:                                                   | Maximum tokens for main agent responses                              |
| `mainAgentModel`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | Main agent model ID                                                  |
| `mainAgentReasoningEffort`                                           | *string*                                                             | :heavy_minus_sign:                                                   | Reasoning effort setting for main agent                              |
| `preferredProvider`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | Preferred AI provider (anthropic, azure-foundry, openai, openrouter) |
| `subAgentMaxTokens`                                                  | *number*                                                             | :heavy_minus_sign:                                                   | Maximum tokens for sub agent responses                               |
| `subAgentModel`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | Sub agent model ID                                                   |
| `subAgentReasoningEffort`                                            | *string*                                                             | :heavy_minus_sign:                                                   | Reasoning effort setting for sub agent                               |