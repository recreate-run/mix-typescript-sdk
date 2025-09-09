# Auth
(*auth*)

## Overview

### Available Operations

* [setApiKey](#setapikey) - Set API key

## setApiKey

Set API key for direct authentication

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setApiKey" method="post" path="/api/auth/apikey" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.auth.setApiKey({
    apiKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { authSetApiKey } from "mix-typescript-sdk/funcs/authSetApiKey.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await authSetApiKey(mix, {
    apiKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authSetApiKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetApiKeyRequest](../../models/operations/setapikeyrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SetApiKeyResponse](../../models/operations/setapikeyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.RESTResponseError | 400, 401                 | application/json         |
| errors.RESTResponseError | 500                      | application/json         |
| errors.MixDefaultError   | 4XX, 5XX                 | \*/\*                    |