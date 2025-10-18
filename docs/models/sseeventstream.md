# SSEEventStream

Server-Sent Event stream with discriminated event types


## Supported Types

### `models.SSECompleteEvent`

```typescript
const value: models.SSECompleteEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    done: false,
    type: "<value>",
  },
};
```

### `models.SSEConnectedEvent`

```typescript
const value: models.SSEConnectedEvent = {
  event: "session_deleted",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
  },
};
```

### `models.SSEContentEvent`

```typescript
const value: models.SSEContentEvent = {
  event: "session_created",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEErrorEvent`

```typescript
const value: models.SSEErrorEvent = {
  event: "permission",
  id: "1234567890",
  retry: 30000,
  data: {
    error: "<value>",
  },
};
```

### `models.SSEHeartbeatEvent`

```typescript
const value: models.SSEHeartbeatEvent = {
  event: "user_message_created",
  id: "1234567890",
  retry: 30000,
  data: {
    type: "ping",
  },
};
```

### `models.SSEPermissionEvent`

```typescript
const value: models.SSEPermissionEvent = {
  event: "session_deleted",
  id: "1234567890",
  retry: 30000,
  data: {
    action: "<value>",
    description: "deed or reflate huzzah",
    id: "<id>",
    sessionId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSESessionCreatedEvent`

```typescript
const value: models.SSESessionCreatedEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    createdAt: 419339,
    sessionId: "<id>",
    title: "<value>",
    type: "session_created",
  },
};
```

### `models.SSESessionDeletedEvent`

```typescript
const value: models.SSESessionDeletedEvent = {
  event: "session_created",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
    type: "session_deleted",
  },
};
```

### `models.SSESummarizeEvent`

```typescript
const value: models.SSESummarizeEvent = {
  event: "error",
  id: "1234567890",
  retry: 30000,
  data: {
    done: true,
    progress: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEThinkingEvent`

```typescript
const value: models.SSEThinkingEvent = {
  event: "connected",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEToolEvent`

```typescript
const value: models.SSEToolEvent = {
  event: "tool_execution_complete",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    input: "<value>",
    name: "brave_search",
    status: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEToolExecutionCompleteEvent`

```typescript
const value: models.SSEToolExecutionCompleteEvent = {
  event: "content",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    success: true,
    toolCallId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSEToolExecutionStartEvent`

```typescript
const value: models.SSEToolExecutionStartEvent = {
  event: "user_message_created",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    toolCallId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSEToolParameterDeltaEvent`

```typescript
const value: models.SSEToolParameterDeltaEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    input: "<value>",
    toolCallId: "<id>",
    type: "<value>",
  },
};
```

### `models.SSEUserMessageCreatedEvent`

```typescript
const value: models.SSEUserMessageCreatedEvent = {
  event: "thinking",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    messageId: "<id>",
    type: "user_message_created",
  },
};
```

