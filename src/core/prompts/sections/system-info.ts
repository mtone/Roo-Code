import os from "os"
import osName from "os-name"

import { getShell } from "../../../utils/shell"

export function getSystemInfoSection(cwd: string): string {
	let details = `====

SYSTEM INFORMATION

Operating System: ${osName()}
Home Directory: ${os.homedir().toPosix()}
Current Workspace Directory: ${cwd.toPosix()}

The Current Workspace Directory is the active VS Code project directory, and is therefore the default directory for all tool operations.
New terminals will be created in the current workspace directory, however if you change directories in a terminal it will then have a different working directory;  changing directories in a terminal does not modify the workspace directory for other tools.`

	return details
}
