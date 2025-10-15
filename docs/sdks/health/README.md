# Health
(*health*)

## Overview

### Available Operations

* [getOAuthHealth](#getoauthhealth) - Get OAuth authentication health

## getOAuthHealth

Get health status of all OAuth credentials. Background service refreshes tokens 35 minutes before expiry. API calls mark tokens expired 5 minutes before expiry. Health statuses: 'healthy' (tokens valid, >5min remaining), 'degraded' (some tokens within 5min of expiry but refreshable), 'unhealthy' (tokens expired without refresh capability)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOAuthHealth" method="get" path="/health/auth" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.health.getOAuthHealth();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { authenticationGetOAuthHealth } from "mix-typescript-sdk/funcs/authenticationGetOAuthHealth.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await authenticationGetOAuthHealth(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationGetOAuthHealth failed:", res.error);
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

**Promise\<[operations.GetOAuthHealthResponse](../../models/operations/getoauthhealthresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |