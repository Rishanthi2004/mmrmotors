# MMR MOTORS LTD — Business Website

A modern, responsive, static automotive business website for **MMR MOTORS LTD**, established in Croydon, United Kingdom.

## Business Details

- **Company Name:** MMR MOTORS LTD
- **Address:** Flat 9 Solar Court, 119 Sydenham Road, Croydon, CR0 2EZ, United Kingdom
- **Phone:** 07735 508394 (`tel:+447735508394`)
- **Email:** mmrmotorsltd@gmail.com (`mailto:mmrmotorsltd@gmail.com`)
- **Core Services:**
  1. Routine Vehicle Maintenance
  2. Vehicle Repair Services
  3. Used Car Sales & Stock Enquiries

## Features & Implementation

1. **Header & Navigation (FR-01):**
   - Clean single-row top bar following top-bar contract principles.
   - Smooth scrolling to section anchors (`#home`, `#about`, `#services`, `#used-cars`, `#why-choose-us`, `#contact`).
   - Click-to-call direct dialler button (`tel:+447735508394`).
   - Accessible mobile drawer menu with tap targets $\ge 44\text{px}$.

2. **Hero Section (FR-02):**
   - High-impact automotive workshop image with 4.5:1 contrast scrim.
   - Exact client headline: *"Your Trusted Partner for Vehicle Care"*.
   - Clear action triggers: *"Call Us Now"* and *"Explore Our Services"*.
   - Strictly truthful presentation without unsupported warranty/guarantee claims.

3. **About Us (FR-03):**
   - SRS-approved introduction highlighting vehicle maintenance, repair services, and used car sales.
   - Location focus on Croydon and surrounding London motorists.

4. **Our Services (FR-04):**
   - 3 authorized core service cards with bespoke photography and bulleted inspection/repair details:
     - Vehicle Maintenance
     - Vehicle Repair Services
     - Used Car Sales
   - Interactive quote and enquiry triggers.

5. **Used Car Sales (FR-05):**
   - Dedicated used vehicle sales section with showroom imagery.
   - Interactive Stock Enquiry Helper (filtering by body type, target budget, and fuel type).
   - Clear compliance notice explaining that vehicle specifications and pricing are provided directly upon enquiry.

6. **Why Choose Us (FR-06):**
   - 4 focus areas: Vehicle Maintenance, Repair Service Enquiries, Used Car Sales, Direct Customer Contact.
   - Fully compliant with the ban on unverified claims, fake customer reviews, or unverified star ratings.

7. **Contact Us (FR-07):**
   - Prominent display of business address, telephone, email, and opening hours.
   - Interactive Google Maps embed and direct Google Maps search link for Sydenham Road, Croydon.
   - Validated customer enquiry form with direct email generation to guarantee no lost leads.

8. **Footer (FR-08):**
   - Navigation links, full address, email, telephone, and copyright notice: `© 2026 MMR MOTORS LTD. All rights reserved.`.

9. **SEO & Performance:**
   - Specific page title: `MMR MOTORS LTD | Vehicle Maintenance, Repairs & Used Cars`
   - Specific meta description: `Contact MMR MOTORS LTD in Croydon for vehicle maintenance, repair services and used car sales enquiries.`
   - Schema.org JSON-LD structured data for `AutoRepair` with postal address, geocoordinates, opening hours, and service catalog.
   - `robots.txt` and `sitemap.xml`.

## Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript check & linting
npm run lint

# Build production bundle
npm run build
```
