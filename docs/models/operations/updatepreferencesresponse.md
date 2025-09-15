# UpdatePreferencesResponse

Updated preferences

## Example Usage

```typescript
import { UpdatePreferencesResponse } from "mix-typescript-sdk/models/operations";

let value: UpdatePreferencesResponse = {};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `createdAt`                     | *number*                        | :heavy_minus_sign:              | Creation timestamp              |
| `mainAgentMaxTokens`            | *number*                        | :heavy_minus_sign:              | Maximum tokens for main agent   |
| `mainAgentModel`                | *string*                        | :heavy_minus_sign:              | Main agent model ID             |
| `mainAgentReasoningEffort`      | *string*                        | :heavy_minus_sign:              | Reasoning effort for main agent |
| `preferredProvider`             | *string*                        | :heavy_minus_sign:              | Preferred AI provider           |
| `subAgentMaxTokens`             | *number*                        | :heavy_minus_sign:              | Maximum tokens for sub agent    |
| `subAgentModel`                 | *string*                        | :heavy_minus_sign:              | Sub agent model ID              |
| `subAgentReasoningEffort`       | *string*                        | :heavy_minus_sign:              | Reasoning effort for sub agent  |
| `updatedAt`                     | *number*                        | :heavy_minus_sign:              | Last update timestamp           |