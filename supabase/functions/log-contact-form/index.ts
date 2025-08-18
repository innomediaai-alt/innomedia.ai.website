import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  reasonForContact: string[];
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, company, reasonForContact, message }: ContactFormData = await req.json()

    // Get Google Sheets credentials from environment variables
    const GOOGLE_SHEETS_API_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY')
    const SPREADSHEET_ID = '1wjgKEGViZbUKvtNORU24hVtXbUXZpurN3teZL9vlRSY'
    const RANGE = 'Sheet1!A:G' // Assuming columns A-G for the data

    if (!GOOGLE_SHEETS_API_KEY) {
      console.error('Google Sheets API key not configured')
      return new Response(
        JSON.stringify({ error: 'Google Sheets API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare the data row
    const timestamp = new Date().toISOString()
    const purposeOfInquiry = reasonForContact.join(', ')
    const aiNeeds = message || 'No additional message provided'
    const status = 'To Be Responded'

    const values = [
      [timestamp, name, email, company, purposeOfInquiry, aiNeeds, status]
    ]

    // Google Sheets API URL
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`

    // Make the API call to Google Sheets
    const response = await fetch(sheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: values
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Google Sheets API error:', errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to write to Google Sheets', details: errorText }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const result = await response.json()
    console.log('Successfully logged to Google Sheets:', result)

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form data logged successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in log-contact-form function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})