import React from 'react'
import Head from '@docusaurus/Head'
import './embed-docs.css'

export default function EmbedDocs(): React.ReactNode {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          .navbar, .footer, .theme-doc-sidebar-container { display: none !important; }
          .main-wrapper { margin: 0 !important; }
        `}</style>
      </Head>
      <div className="embed-docs-container">
        {/* Introduction Section */}
        <section className="docs-section">
          <h1>Subitem Template Builder - How to Use</h1>
          <p className="intro-text">
            <strong>Subitem Template Builder</strong> empowers users to create,
            save, and apply predefined templates for subitems. Instead of
            manually creating the same subitem structure repeatedly, users can
            create a template once and apply it whenever needed, saving
            significant time on repetitive tasks.
          </p>

          <h2>Supported Column Types</h2>
          <p>
            The app supports the following column types for creating templates:
          </p>
          <ul>
            <li>Text</li>
            <li>Numbers</li>
            <li>Date</li>
            <li>Dropdown</li>
            <li>People</li>
            <li>Connected board</li>
            <li>Status</li>
            <li>Timeline</li>
          </ul>

          <div className="video-container">
            <h2>See it in action</h2>
            <video
              src="/videos/Demo_ApplyingTemplate_720.mp4"
              controls
              muted
              playsInline
              poster="/img/HomePageScreenshot_1.png"
              className="demo-video"
            />
            <p className="video-caption">
              If the video doesn't load, you can{' '}
              <a href="/videos/Demo_ApplyingTemplate_720.mp4" target="_blank">
                download it here
              </a>
              .
            </p>
          </div>
        </section>

        {/* Installation Section */}
        <section className="docs-section">
          <h1>Installation Guide</h1>
          <p>
            Installing Subitem Template Builder is quick and easy. Choose your
            preferred installation method below.
          </p>

          <h2>Quick Install</h2>
          <p>
            Click the button below to install Subitem Template Builder directly:
          </p>
          <div className="install-button-container">
            <a
              href="https://auth.monday.com/oauth2/authorize?client_id=34854162b78c25e82b95f9366d0d66cd&response_type=install"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Add to monday.com"
                height="32"
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png"
              />
            </a>
          </div>

          <h2>Manual Installation via Marketplace</h2>
          <p>
            If you prefer to install through the monday.com Apps Marketplace,
            follow these steps:
          </p>

          <h3>Step 1: Navigate to the monday.com Apps Marketplace</h3>
          <ul>
            <li>Log in to your monday.com account.</li>
            <li>
              Click on the Apps Marketplace icon located in the top-right
              corner.
            </li>
            <li>
              Use the search bar within the marketplace to find Subitem Template
              Builder.
            </li>
          </ul>

          <h3>Step 2: Install Subitem Template Builder</h3>
          <ul>
            <li>
              Locate Subitem Template Builder by Leno Apps in the search
              results.
            </li>
            <li>Click the Install App button.</li>
            <li>
              Follow the on-screen instructions to review and approve the
              required permissions.
            </li>
          </ul>

          <h2>Permissions Explained</h2>
          <p>
            Subitem Template Builder requires the following permissions to
            function properly:
          </p>

          <h3>Required Permissions</h3>
          <ul>
            <li>
              <strong>me:read:</strong> Lets the app know who you are so
              templates can be saved under your name and your default access can
              be set.
            </li>
            <li>
              <strong>boards: read:</strong> Allows the app to view your chosen
              boards (their groups, items, and columns) so you can browse and
              map data while building templates.
            </li>
            <li>
              <strong>boards: write:</strong> Allows the app to add subitems and
              create needed columns when you apply a template to a board you
              select.
            </li>
            <li>
              <strong>users: read:</strong> Lets the app look up coworkers'
              names so you can assign people in templates and share with
              specific teammates.
            </li>
          </ul>
        </section>

        {/* First Template Section */}
        <section className="docs-section">
          <h1>Creating and Applying Your First Template</h1>

          <h2>Prerequisites</h2>
          <ul>
            <li>
              At least one item with existing subitems to use as a template
              source
            </li>
          </ul>

          <h2>Step 1: Prepare Your Source Subitems</h2>
          <p>
            Before creating a template, you need an item with subitems that
            represents the structure you want to replicate.
          </p>

          <div className="step-image">
            <img
              src="/img/Step1_SubitemBuilder.png"
              alt="Step 1: Prepare your source subitems"
              className="guide-image"
            />
          </div>

          <h2>Step 2: Access App in Item View</h2>
          <ol>
            <li>Navigate to your item on the Monday board</li>
            <li>
              Open the item view for the item by clicking on the expanding
              arrows
            </li>
            <li>
              Select <strong>"Subitem Template Builder"</strong>
            </li>
          </ol>

          <div className="step-image">
            <img
              src="/img/Step2_SubitemBuilder.png"
              alt="Step 2: Access app in item view"
              className="guide-image"
            />
          </div>

          <h2>Step 3: Create New Template</h2>
          <ol>
            <li>
              In the Subitem Template Builder interface. If you not have any
              saved templates, click on the dropdown and select from the
              subitems available. If you have saved templates, click on the +
              icon and select the subitems to save as templates.
            </li>
            <li>
              <strong>Congrats</strong> you have created your first template.
            </li>
          </ol>

          <h2>Step 4: Apply Your Template</h2>
          <ol>
            <li>
              On the templates list, tick all the boxes of the subitem templates
              you want to apply to the item.
            </li>
            <li>
              Click <strong>"Apply to board"</strong>
            </li>
            <li>Watch as the subitems get created for your item</li>
          </ol>

          <div className="step-image">
            <img
              src="/img/Step3_SubitemBuilder.png"
              alt="Step 3: Apply your template"
              className="guide-image"
            />
          </div>

          <p>
            <strong>
              You've now successfully created and applied your first template!
            </strong>
          </p>
        </section>

        {/* Editing Templates Section */}
        <section className="docs-section">
          <h1>Editing Templates</h1>
          <p>
            This guide will walk you through editing existing templates with
            Subitem Template Builder. Learn how to modify template content,
            update permissions, and manage your templates effectively.
          </p>

          <h2>Prerequisites</h2>
          <ul>
            <li>
              At least one existing template created with Subitem Template
              Builder
            </li>
          </ul>

          <h2>Step 1: Opening the Template Editor</h2>
          <ol>
            <li>Open the Subitem Template Builder app</li>
            <li>
              On the list of templates, click on the pencil icon for the
              template you want to edit
            </li>
            <li>The template editor will open in a full-screen modal</li>
          </ol>

          <div className="feature-image">
            <img
              src="/img/Feature_EditTemplates.png"
              alt="Edit Templates Feature"
              className="guide-image"
            />
          </div>

          <h2>Step 2: Using the Template Editor</h2>
          <ol>
            <li>
              <strong>Edit the template name</strong> by clicking on it at the
              top
            </li>
            <li>
              <strong>Modify column values</strong> in the table by clicking on
              each field:
              <ul>
                <li>Text fields: Type directly</li>
                <li>Number fields: Enter numbers</li>
                <li>Date fields: Use the date picker (times are in UTC)</li>
                <li>Status fields: Select from options</li>
                <li>
                  Dropdown fields: Choose from available options (Shows dropdown
                  options saved on the template)
                </li>
                <li>
                  People fields: Select from people who has access to the board
                </li>
                <li>
                  Connected boards: Link to items from other boards (Shows items
                  from the connected board that was saved on the template)
                </li>
                <li>Timeline fields: Click to set date ranges</li>
              </ul>
            </li>
            <li>
              <strong>Save your changes</strong> by clicking "Save Template" at
              the bottom
            </li>
          </ol>

          <h2>Step 3: Setting Template Permissions</h2>

          <div className="feature-image">
            <img
              src="/img/Feature_SettingPermissions.png"
              alt="Setting Permissions Feature"
              className="guide-image"
            />
          </div>

          <ol>
            <li>
              <strong>Set who can see the template</strong>:
              <ul>
                <li>"Everyone" - All board users can see and use it</li>
                <li>"Only me" - Only you can see and use it</li>
                <li>"Specific people" - Select specific users to share with</li>
              </ul>
            </li>
            <li>
              <strong>Set who can edit the template</strong> (if not "Only me"):
              <ul>
                <li>"Only me" - Only you can edit it</li>
                <li>"Everyone" - All users with access can edit it</li>
              </ul>
            </li>
            <li>
              <strong>Save permissions</strong> by clicking "Save Template"
            </li>
          </ol>

          <p>
            The system shows permission badges (🌐 Everyone, 🔒 Private, 🔗
            Shared) to help you understand current settings.
          </p>

          <div className="feature-image">
            <img
              src="/img/Feature_ColumnMatching.png"
              alt="Column Matching Feature"
              className="guide-image"
            />
          </div>
        </section>

        {/* Support Section */}
        <section className="docs-section">
          <h1>Need Help?</h1>
          <p>
            If you need assistance or have questions about Subitem Template
            Builder, we're here to help!
          </p>

          <div className="support-info">
            <h2>Contact Support</h2>
            <p>
              Email us at:{' '}
              <a href="mailto:support@lenoapps.com">support@lenoapps.com</a>
            </p>
            <p>We typically respond within 24 hours during business days.</p>
          </div>
        </section>
      </div>
    </>
  )
}
