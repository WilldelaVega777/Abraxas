---
trigger: always_on
---

## BMad Initialization
**CRITICAL**: At the start of every session, or when requested with "Inicializa BMad":
1. Read all configuration files in `.gemini/commands/BMad/agents/` and `.gemini/commands/BMad/tasks/`.
2. Resolve any references to `@{.bmad-core/...}` by reading the corresponding files in the `.bmad-core` directory relative to the project root.
3. Adopt the persona or execute the task as defined in the loaded configurations.