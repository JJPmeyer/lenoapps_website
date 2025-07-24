---
sidebar_position: 3
---

# Quick Start Guide

Get up and running with Subitem Template Builder in just 5 minutes. This guide will walk you through creating your first template and applying it to save time.

## Prerequisites

- Subitem Template Builder installed (see [Installation Guide](./installation))
- A monday.com board with subitems enabled
- At least one item with subitems on your board

## Step 1: Access the App

1. Navigate to any item that has subitems enabled
2. Click the three dots menu (⋯) next to the item
3. Select **"Subitem Template Builder"** from the dropdown menu

Alternatively, you can access the app from:

- **Apps menu**: Go to Apps → Subitem Template Builder
- **Board settings**: In board settings, find Subitem Template Builder under Apps

## Step 2: Create Your First Template

1. In the Subitem Template Builder interface, click **"Create Template"**
2. Give your template a descriptive name (e.g., "Bug Report Template")
3. Select the board where you want to save this template
4. Choose the permission level:
   - **Private**: Only you can see and use this template
   - **Team**: Share with specific team members
   - **Workspace**: Available to all workspace members

## Step 3: Configure Template Structure

1. **Select Source Item**: Choose an existing item with subitems that represents your desired template structure
2. **Review Columns**: The app will automatically detect all columns in your subitems
3. **Set Default Values**: For each column, you can:
   - Keep the current value as default
   - Set a new default value
   - Leave it empty for manual entry
   - Use placeholders (e.g., {{TODAY}} for current date)

## Step 4: Save and Test

1. Click **"Save Template"** to store your template
2. Navigate to another item where you want to apply the template
3. Open Subitem Template Builder and select your saved template
4. Click **"Apply Template"** to create new subitems

## Example: Bug Report Template

Let's create a practical example - a bug report template:

### Template Structure

```
Bug Report Template
├── Bug Title (Text)
├── Description (Text)
├── Severity (Dropdown: Low, Medium, High, Critical)
├── Assignee (People)
├── Due Date (Date)
├── Status (Status: Open, In Progress, Fixed, Closed)
└── Steps to Reproduce (Text)
```

### Default Values

- **Bug Title**: [Leave empty for manual entry]
- **Description**: [Leave empty for manual entry]
- **Severity**: Medium
- **Assignee**: [Current user]
- **Due Date**: [TODAY + 7 days]
- **Status**: Open
- **Steps to Reproduce**: [Leave empty for manual entry]

## Step 5: Apply Your Template

1. Go to any item where you want to create bug report subitems
2. Open Subitem Template Builder
3. Select your "Bug Report Template"
4. Review the preview of subitems that will be created
5. Click **"Apply Template"**

The app will create new subitems with your predefined structure and default values. You can then edit individual values as needed.

## Tips for Success

### Template Naming

- Use descriptive names that clearly indicate the template's purpose
- Include the department or team name if applicable
- Add version numbers for templates that evolve over time

### Default Values

- Set smart defaults that reduce manual entry
- Use placeholders like {{TODAY}}, {{USER}}, {{BOARD_NAME}}
- Leave important fields empty for manual entry to ensure accuracy

### Permissions

- Start with private templates while testing
- Share with team members once you're confident in the template
- Use workspace templates for company-wide processes

## Next Steps

Now that you've created your first template, explore these advanced features:

- [Template Management](./features/template-creation) - Organize and edit your templates
- [Column Mapping](./features/column-mapping) - Handle complex column scenarios
- [Use Cases](./use-cases/project-management) - See how others use templates
- [Analytics](./features/analytics) - Track your productivity gains

## Need Help?

If you encounter any issues during setup:

- Check our [FAQ](./support/faq) for common questions
- Review the [Troubleshooting Guide](./support/troubleshooting)
- Contact support at support@tinytreesolutions.com
