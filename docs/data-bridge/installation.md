---
sidebar_position: 2
---

# Install & Use Data Bridge

Use this guide for first-time setup and your first data load.

> Replace `[YOUR INSTALL LINK]` with your live monday.com install URL.

## Step 1: Install the app

1. Open your install link: `[YOUR INSTALL LINK]`
2. Click **Install app**
3. Select the monday.com workspace/account where you want to use it

## Step 2: Open the app in monday

1. Go to the board where you want to load data
2. Open **Data Bridge** from the board view

## Step 3: Authorize monday

1. On first open, the app asks for monday authorization
2. Approve access
3. If you decline by mistake, click **Authorise monday** and try again

## Step 4: Choose your source connector

In **Select source**, choose one of the available connectors.

Current connectors include **Google Sheets** and **Excel**.

New sources are added regularly, and you can request any source at
**support@lenoapps.com**.

## Step 5: Connect your source

1. Choose your source type
2. Authenticate or upload, depending on connector type
3. Provide the required source details (for example a URL, file, or connection reference)

## Step 6: Select what to load

1. Choose the dataset, sheet, or tab you want to use
2. Select the fields you want to load
3. Choose your target board and group

## Step 7: Set hierarchy options (if needed)

1. Choose whether your destination is a **standard board** or a **multi subitems board**
2. If loading subitems, map:
   - **Unique Row ID**
   - **Parent Row ID**

Data Bridge is built to support both standard boards and multi subitems boards in one workflow.

## Step 8: Map fields to monday columns

1. Click **Map fields**
2. Match each source field to a monday.com column
3. Use **New column** where needed
4. Set the **Item name** field
5. Save mapping

## Step 9: Run the data load

1. Click **Run import now**
2. Watch progress logs in the app

## Step 10: Stop if needed

If a run is active and you need to stop it, click **Stop**.

## Quick Tips

- Start with a small row limit first for testing
- Confirm your item name field is mapped correctly
- For hierarchy data loads, parent links must be correct or rows may be skipped
- Use schedules to keep destination boards up to date automatically
