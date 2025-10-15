# Internal
(*internal*)

## Overview

### Available Operations

* [refreshOAuthTokens](#refreshoauthtokens) - Manually refresh OAuth tokens

## refreshOAuthTokens

Manually trigger OAuth token refresh for all expired tokens. Normally tokens are refreshed automatically by the background service every 30 minutes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="refreshOAuthTokens" method="post" path="/internal/auth/refresh-tokens" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.internal.refreshOAuthTokens();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { authenticationRefreshOAuthTokens } from "mix-typescript-sdk/funcs/authenticationRefreshOAuthTokens.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await authenticationRefreshOAuthTokens(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationRefreshOAuthTokens failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RefreshOAuthTokensResponse](../../models/operations/refreshoauthtokensresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |