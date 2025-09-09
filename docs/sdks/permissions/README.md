# Permissions
(*permissions*)

## Overview

### Available Operations

* [deny](#deny) - Deny permission
* [grant](#grant) - Grant permission

## deny

Deny a specific permission

### Example Usage

<!-- UsageSnippet language="typescript" operationID="denyPermission" method="post" path="/api/permissions/{id}/deny" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.permissions.deny({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { permissionsDeny } from "mix-typescript-sdk/funcs/permissionsDeny.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await permissionsDeny(mix, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsDeny failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DenyPermissionRequest](../../models/operations/denypermissionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DenyPermissionResponse](../../models/operations/denypermissionresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.RESTResponseError | 401, 404                 | application/json         |
| errors.RESTResponseError | 500                      | application/json         |
| errors.MixDefaultError   | 4XX, 5XX                 | \*/\*                    |

## grant

Grant a specific permission

### Example Usage

<!-- UsageSnippet language="typescript" operationID="grantPermission" method="post" path="/api/permissions/{id}/grant" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.permissions.grant({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { permissionsGrant } from "mix-typescript-sdk/funcs/permissionsGrant.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await permissionsGrant(mix, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsGrant failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GrantPermissionRequest](../../models/operations/grantpermissionrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GrantPermissionResponse](../../models/operations/grantpermissionresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.RESTResponseError | 401, 404                 | application/json         |
| errors.RESTResponseError | 500                      | application/json         |
| errors.MixDefaultError   | 4XX, 5XX                 | \*/\*                    |