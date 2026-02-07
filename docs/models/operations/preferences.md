# Preferences

User preferences (null if no preferences exist)

## Example Usage

```typescript
import { Preferences } from "mix-typescript-sdk/models/operations";

let value: Preferences = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `createdAt`                                           | *number*                                              | :heavy_minus_sign:                                    | Unix timestamp when preferences were created          |
| `mainAgentMaxTokens`                                  | *number*                                              | :heavy_minus_sign:                                    | Maximum tokens for main agent responses               |
| `mainAgentModel`                                      | *string*                                              | :heavy_minus_sign:                                    | Main agent model ID                                   |
| `mainAgentReasoningEffort`                            | *string*                                              | :heavy_minus_sign:                                    | Reasoning effort setting for main agent               |
| `preferredProvider`                                   | *string*                                              | :heavy_minus_sign:                                    | Preferred AI provider (anthropic, openai, openrouter) |
| `subAgentMaxTokens`                                   | *number*                                              | :heavy_minus_sign:                                    | Maximum tokens for sub agent responses                |
| `subAgentModel`                                       | *string*                                              | :heavy_minus_sign:                                    | Sub agent model ID                                    |
| `subAgentReasoningEffort`                             | *string*                                              | :heavy_minus_sign:                                    | Reasoning effort setting for sub agent                |
| `updatedAt`                                           | *number*                                              | :heavy_minus_sign:                                    | Unix timestamp of last update                         |