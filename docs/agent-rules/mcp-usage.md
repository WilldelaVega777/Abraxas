# MCP Usage Protocol

## CRITICAL INSTRUCTION FOR AGENTS (Keun, Robert, James)

To manage context and resources efficiently, you must follow this strict protocol regarding specialized MCP tools:

1.  **Explicit Activation**: You MUST explicitly ask the user for permission to "Activate" specialized MCP tools before attempting to use them.
    *   **Specialized Tools**: Playwright, Postman, Neon, VSCode Debug.
    *   **Example**: "I need to run E2E tests. Please activate the Playwright MCP."

2.  **Immediate Deactivation**: As soon as you are finished with the specific task requiring the tool, you MUST ask the user to "Deactivate" it.
    *   **Reason**: To save context window and reduce noise.
    *   **Example**: "I have finished the E2E tests. Please deactivate the Playwright MCP."

3.  **Standard Tools**: This rule does NOT apply to standard tools like `filesystem`, `search`, or `browser_subagent`.
