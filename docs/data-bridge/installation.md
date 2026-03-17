---
sidebar_position: 2
---

# Install & Use Data Bridge

Use this guide for first-time setup and your first data load.

## Step 1: Install the app

### Quick Install

Click the button below to install Data Bridge directly:

<a href="https://auth.monday.com/oauth2/authorize?client_id=484608419f0250dcd64886aaab18e802&response_type=install">
      <img
        alt="Add to monday.com"
        height="32"
        src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png"
      />
    </a>

### Manual Installation via Marketplace

If you prefer to install through the monday.com Apps Marketplace, follow these steps:

1. Log in to your monday.com account.
2. Click on the Apps Marketplace icon located in the top-right corner.
3. Use the search bar within the marketplace to find **Data Bridge**.
4. Locate **Data Bridge by Leno Apps** in the search results.
5. Click **Install App**.
6. Follow the on-screen instructions to review and approve the required permissions.

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

## Manage Connections

Users can manage connected data sources from one place.

### Where to find it

- Top-right link: **Connections**

### What users can do

- View all connected Google accounts
- See connection status: **Connected** or **Needs reconnect**
- Reconnect an account if access has expired
- Disconnect an account they no longer want to use
- Refresh the connection list and status

### What information is shown per connection

- Connected Google account email
- Current status
- Usage reference showing how many templates and saved schedules use that connection
- Last updated timestamp

### Important behavior

- Disconnecting removes the stored Google access for that account connection
- Templates and saved schedules are not deleted
- Imports using that connection will not run until the user reconnects

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

## Support Chat

Data Bridge includes an in-app support chat so users can get help without leaving monday.com.

### Where to find it

- Bottom-right corner of the app
- Button label: **💬 Data Bridge**

### How it works

- Click the chat button to open the support window
- Send your question directly from inside the app
- If we are offline, you can still leave a message and receive a follow-up by email

## Quick Tips

- Start with a small row limit first for testing
- Confirm your item name field is mapped correctly
- For hierarchy data loads, parent links must be correct or rows may be skipped
- Use schedules to keep destination boards up to date automatically
