```mermaid
sequenceDiagram
    actor U as User
    participant C as Client
    U->>+C: 1 : auth data (email/phone/password)
    C->>C: 2 : validate
    C->>-U: 3 : Error validation message
```
