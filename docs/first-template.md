---
sidebar_position: 4
---

# Creating Your First Template

This guide will walk you through creating your first template with Subitem Template Builder. We'll create a practical example that you can use immediately.

## Prerequisites

- Subitem Template Builder installed and accessible
- A monday.com board with subitems enabled
- At least one item with existing subitems to use as a template source

## Step 1: Prepare Your Source Item

Before creating a template, you need an item with subitems that represents the structure you want to replicate.

### Example: Project Task Template

Let's say you want to create a template for project tasks. First, create an item with subitems that have the structure you want:

1. Create a new item called "Sample Project Task"
2. Add subitems with the following structure:
   - **Task Name**: "Sample Task"
   - **Description**: "This is a sample task description"
   - **Priority**: "Medium"
   - **Assignee**: [Your name]
   - **Due Date**: [Today + 7 days]
   - **Status**: "Not Started"
   - **Estimated Hours**: "8"
   - **Notes**: "Additional notes here"

## Step 2: Access Template Builder

1. Navigate to your "Sample Project Task" item
2. Click the three dots menu (⋯) next to the item
3. Select **"Subitem Template Builder"** from the dropdown

## Step 3: Create New Template

1. In the Subitem Template Builder interface, click **"Create Template"**
2. Fill in the template details:
   - **Template Name**: "Project Task Template"
   - **Description**: "Standard template for project tasks with all necessary fields"
   - **Category**: "Project Management" (optional)
3. Click **"Next"**

## Step 4: Select Source Structure

1. The app will automatically detect the subitem structure from your current item
2. Review the columns that will be included in your template:
   - Task Name (Text)
   - Description (Text)
   - Priority (Dropdown)
   - Assignee (People)
   - Due Date (Date)
   - Status (Status)
   - Estimated Hours (Number)
   - Notes (Text)
3. Click **"Next"**

## Step 5: Configure Default Values

This is where you set what values will be pre-filled when the template is applied:

### Smart Defaults

- **Task Name**: [Leave empty] - Users will enter this manually
- **Description**: [Leave empty] - Users will enter this manually
- **Priority**: "Medium" - Good default for most tasks
- **Assignee**: [Current User] - Automatically assigns to the person applying the template
- **Due Date**: [TODAY + 7 days] - Sets due date to one week from today
- **Status**: "Not Started" - Logical starting status
- **Estimated Hours**: "8" - Default 8-hour estimate
- **Notes**: [Leave empty] - Users will add notes as needed

### Using Placeholders

You can use these placeholders in your default values:

- `{{TODAY}}` - Current date
- `{{TODAY + 1}}` - Tomorrow
- `{{TODAY + 7}}` - One week from today
- `{{USER}}` - Current user's name
- `{{BOARD_NAME}}` - Name of the current board
- `{{ITEM_NAME}}` - Name of the parent item

## Step 6: Set Permissions

Choose who can access this template:

- **Private**: Only you can see and use this template
- **Team**: Share with specific team members
- **Workspace**: Available to all workspace members

For your first template, we recommend starting with **Private** to test it thoroughly.

## Step 7: Save and Test

1. Click **"Save Template"** to create your template
2. Navigate to another item where you want to apply the template
3. Open Subitem Template Builder and select your "Project Task Template"
4. Click **"Apply Template"** to create new subitems

## Template Best Practices

### Naming Conventions

- Use descriptive names that clearly indicate the template's purpose
- Include the department or team name if applicable
- Add version numbers for templates that evolve over time

### Default Values Strategy

- **Set smart defaults** for fields that have common values
- **Leave important fields empty** for manual entry to ensure accuracy
- **Use placeholders** to make templates dynamic and contextual

### Column Selection

- Include all columns that are consistently needed
- Exclude columns that vary significantly between uses
- Consider creating multiple templates for different scenarios

## Example Templates

### Customer Onboarding Template

```
Customer Onboarding Template
├── Welcome Email Sent (Checkbox)
├── Account Setup (Status: Not Started, In Progress, Complete)
├── Training Scheduled (Date)
├── Account Manager (People)
├── Notes (Text)
└── Next Follow-up (Date: TODAY + 14)
```

### Bug Report Template

```
Bug Report Template
├── Bug Title (Text)
├── Description (Text)
├── Severity (Dropdown: Low, Medium, High, Critical)
├── Steps to Reproduce (Text)
├── Expected vs Actual (Text)
├── Assignee (People: Current User)
├── Due Date (Date: TODAY + 3)
└── Status (Status: Open)
```

### Employee Onboarding Template

```
Employee Onboarding Template
├── IT Setup (Checkbox)
├── HR Paperwork (Status: Pending, In Progress, Complete)
├── Training Modules (Number: 5)
├── Mentor Assigned (People)
├── First Day (Date: TODAY)
├── 30-Day Review (Date: TODAY + 30)
└── Notes (Text)
```

## Troubleshooting

### Template Not Saving

- Ensure all required fields are filled
- Check that you have the necessary permissions
- Verify your internet connection

### Columns Missing

- Make sure the source item has the columns you want in the template
- Check that the columns are visible in your board view
- Ensure you have permission to access those columns

### Default Values Not Working

- Verify the placeholder syntax is correct
- Check that the column types support the default values you're setting
- Test with simple values first, then add placeholders

## Next Steps

Now that you've created your first template:

1. **Test it thoroughly** with different scenarios
2. **Share it with your team** once you're confident in it
3. **Create more templates** for other common workflows
4. **Explore advanced features** like column mapping and analytics

## Need Help?

If you encounter any issues while creating your first template:

- Check our [FAQ](./support/faq) for common questions
- Review the [Troubleshooting Guide](./support/troubleshooting)
- Contact support at support@tinytreesolutions.com
