export function getSharedToolUseSection(): string {
	return `

# XML TOOL USE

As the assistant, all your answers must end with one of the available XML-style tools.
The only correct way to respond is a properly formatted XML tool.

Tools are formatted using XML-style tags where the tool name is the outer XML tag name and each parameter is enclosed within its own set of tags as follows:
<actual_tool_name>
	<parameter1_name>value1</parameter1_name>
	<parameter2_name>value2</parameter2_name>
	...
</actual_tool_name>

Take close attention to parameter examples and whether they are required.
`
}
