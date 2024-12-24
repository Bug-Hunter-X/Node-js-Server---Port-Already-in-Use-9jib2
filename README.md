# Node.js Server - Port Already in Use

This repository demonstrates a common error in Node.js server development: the `EADDRINUSE` error. This occurs when the server attempts to bind to a port that's already in use by another process.

## Bug

The `bug.js` file contains a simple HTTP server that listens on port 8080. If another process (e.g., another instance of the server, or another application) is already using this port, the server will fail to start and throw the `EADDRINUSE` error. 

## Solution

The `bugSolution.js` demonstrates how to handle this situation gracefully.  It attempts to bind to the port, and if it fails, it waits for a short period and retries.  This approach prevents the application from crashing immediately, allowing it to recover if the port becomes available.  Alternatively, using a different port would solve the problem immediately.
