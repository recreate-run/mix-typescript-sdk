# ResetPreferencesResponse

Reset preferences

## Example Usage

```typescript
import { ResetPreferencesResponse } from "mix-typescript-sdk/models/operations";

let value: ResetPreferencesResponse = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `createdAt`                       | *number*                          | :heavy_minus_sign:                | Creation timestamp                |
| `mainAgentMaxTokens`              | *number*                          | :heavy_minus_sign:                | Reset main agent max tokens       |
| `mainAgentModel`                  | *string*                          | :heavy_minus_sign:                | Reset main agent model            |
| `mainAgentReasoningEffort`        | *string*                          | :heavy_minus_sign:                | Reset main agent reasoning effort |
| `preferredProvider`               | *string*                          | :heavy_minus_sign:                | Reset preferred provider          |
| `subAgentMaxTokens`               | *number*                          | :heavy_minus_sign:                | Reset sub agent max tokens        |
| `subAgentModel`                   | *string*                          | :heavy_minus_sign:                | Reset sub agent model             |
| `subAgentReasoningEffort`         | *string*                          | :heavy_minus_sign:                | Reset sub agent reasoning effort  |
| `updatedAt`                       | *number*                          | :heavy_minus_sign:                | Reset timestamp                   |