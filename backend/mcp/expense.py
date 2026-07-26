from mcp.server.fastmcp import FastMCP


mcp = FastMCP(
    "Expense MCP Server"
)


@mcp.tool()
def calculate_total_expense(expenses:list):

    total = sum(
        item["amount"]
        for item in expenses
    )

    return {
        "total_expense": total
    }



@mcp.tool()
def category_summary(expenses:list):

    result = {}

    for item in expenses:

        category = item["category"]

        result[category] = (
            result.get(category,0)
            + item["amount"]
        )

    return result