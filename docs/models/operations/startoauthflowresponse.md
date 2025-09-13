# StartOAuthFlowResponse

OAuth authorization information

## Example Usage

```typescript
import { StartOAuthFlowResponse } from "mix-typescript-sdk/models/operations";

let value: StartOAuthFlowResponse = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `authUrl`                              | *string*                               | :heavy_minus_sign:                     | OAuth authorization URL to redirect to |
| `message`                              | *string*                               | :heavy_minus_sign:                     | Instructions for completing OAuth flow |
| `state`                                | *string*                               | :heavy_minus_sign:                     | OAuth state token for verification     |