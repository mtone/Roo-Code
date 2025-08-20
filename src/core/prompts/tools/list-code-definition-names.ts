import { ToolArgs } from "./types"

export function getListCodeDefinitionNamesDescription(args: ToolArgs): string {
	return `## list_code_definition_names
Description: List definition names (classes, functions, methods, etc.) from source code in a single file path or all files at the top level of a specified path.

Parameters:
path (REQUIRED): relative path to file or folder.

Syntax:
<list_code_definition_names>
<path>src/module</path>
</list_code_definition_names>`
}
