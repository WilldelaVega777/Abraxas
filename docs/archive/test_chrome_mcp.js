const { spawn } = require('child_process');

// Command to run the MCP server
const cmd = 'npx';
const args = ['-y', 'chrome-devtools-mcp'];

console.log(`Starting MCP server: ${cmd} ${args.join(' ')}`);

const server = spawn(cmd, args, {
    stdio: ['pipe', 'pipe', 'inherit']
});

let buffer = '';

server.stdout.on('data', (data) => {
    const chunk = data.toString();
    console.log('Received data:', chunk);
    buffer += chunk;

    // Check for JSON-RPC response
    if (buffer.includes('"jsonrpc":"2.0"')) {
        console.log('SUCCESS: Received JSON-RPC response!');
        process.exit(0);
    }
});

server.on('error', (err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
});

// Send initialize request
const initRequest = {
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
        protocolVersion: "2024-11-05",
        capabilities: {},
        clientInfo: {
            name: "test-client",
            version: "1.0.0"
        }
    }
};

const input = JSON.stringify(initRequest) + '\n';
console.log('Sending initialize request...');
server.stdin.write(input);

// Timeout after 15 seconds (download might take time)
setTimeout(() => {
    console.error('TIMEOUT: No response received in 15 seconds.');
    process.exit(1);
}, 15000);
