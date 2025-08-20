import { ToolArgs } from "./types"

export function getExecuteCommandDescription(args: ToolArgs): string | undefined {
	return `## execute_command
Description: Request to execute a CLI command on the system.
Use this when you need to perform system operations or run specific commands to accomplish a step in the user's task.
Provide a clear explanation of what the command does.

<execute_command>
<command>Safe CLI command to execute in PowerShell 7 for Windows 11. Prefer relative commands and paths. Supports chaining.</command>
<cwd>Working directory path for this command if different from ${args.cwd} (optional but always use this instead of 'cd' commands.)</cwd>
</execute_command>
`
}
