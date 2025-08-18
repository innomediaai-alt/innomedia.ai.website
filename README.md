# InnoMedia Website

A modern React website for InnoMedia's Enterprise AI solutions.

## EmailJS Setup Instructions

To enable automatic email sending through the contact form, you need to set up EmailJS:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{company_name}}

New Contact Form Submission

Full Name: {{from_name}}
Business Email: {{from_email}}
Company Name: {{company_name}}

Primary Purpose of Inquiry:
{{inquiry_purpose}}

Message:
{{message}}

---
Submitted from InnoMedia Contact Form
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

### 5. Update the Code
In `src/pages/ContactPage.tsx`, replace these placeholders with your actual values:
- `YOUR_SERVICE_ID` → Your EmailJS Service ID
- `YOUR_TEMPLATE_ID` → Your EmailJS Template ID  
- `YOUR_PUBLIC_KEY` → Your EmailJS Public Key

### 6. Test the Form
1. Deploy your changes
2. Fill out the contact form
3. Check that emails are received at ai-support@innomedia.com

## Features

- Responsive design optimized for all devices
- Modern React with TypeScript
- Tailwind CSS for styling
- Automatic email sending via EmailJS
- Professional contact form with validation

## Development

```bash
npm install
npm run dev
```

## Deployment

The site is configured for deployment on Netlify with automatic builds.