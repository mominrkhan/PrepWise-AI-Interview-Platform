# Fix VAPI Workflow ID Issue

## Problem
Your current VAPI Workflow ID `32ec8649-615d-4fb0-b857-e8b653146c45` does not exist in your VAPI account.

## Solution Steps

### 1. Get Your Correct Workflow ID
1. Go to: https://dashboard.vapi.ai/
2. Log in to your VAPI account
3. Navigate to "Workflows" or "Assistants" section
4. Find the workflow you want to use for interview generation
5. Copy the Workflow ID (it should be a UUID format)

### 2. Update Your .env.local File
Replace the current workflow ID with your correct one:

```bash
# Replace this line in your .env.local file:
NEXT_PUBLIC_VAPI_WORKFLOW_ID = "32ec8649-615d-4fb0-b857-e8b653146c45"

# With your actual workflow ID:
NEXT_PUBLIC_VAPI_WORKFLOW_ID = "your-actual-workflow-id-here"
```

### 3. Restart Development Server
```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

### 4. Test the Fix
- Go to http://localhost:3000/interview
- Click "Call" button
- Should now work without the "assistantId does not exist" error

## Alternative: Create a New Workflow
If you don't have a workflow set up:

1. Go to VAPI Dashboard → "Workflows"
2. Click "Create New Workflow"
3. Set up your interview workflow
4. Copy the new Workflow ID
5. Update your .env.local file with the new ID

## Need Help?
If you need help setting up the VAPI workflow, check their documentation or contact VAPI support.
