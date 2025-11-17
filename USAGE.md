<!-- Start SDK Example Usage [usage] -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.authentication.storeApiKey({
    apiKey: "<value>",
    provider: "openrouter",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->