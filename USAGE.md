<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->