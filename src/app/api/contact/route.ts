import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, service, message } = body;

        // Validate required fields
        if (!name || !email || !company || !service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Map service values to readable names
        const serviceNames: { [key: string]: string } = {
            'email-support': 'Email Customer Support',
            'live-chat': 'Live Chat Support',
            'travel-support': 'Travel & Booking Support',
            'ticket-management': 'Ticket Management & Escalation',
            'multiple': 'Multiple Services'
        };

        const serviceName = serviceNames[service] || service;

        // Send email to admin
        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'Round To Trip <onboarding@resend.dev>',
            to: [process.env.ADMIN_EMAIL_TO || 'kabadwalsarthak@gmail.com'],
            subject: `🚀 New Pilot Request from ${name} - ${company}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <title>New Pilot Request</title>
                    <!--[if mso]>
                    <style type="text/css">
                        body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
                    </style>
                    <![endif]-->
                    <style type="text/css">
                        /* Reset styles */
                        body {
                            margin: 0 !important;
                            padding: 0 !important;
                            -webkit-text-size-adjust: 100% !important;
                            -ms-text-size-adjust: 100% !important;
                        }
                        
                        /* Prevent Gmail from changing font sizes */
                        .ExternalClass {
                            width: 100%;
                        }
                        
                        /* Mobile-specific styles */
                        @media only screen and (max-width: 600px) {
                            /* Make tables full width */
                            .wrapper {
                                width: 100% !important;
                                min-width: 100% !important;
                            }
                            
                            /* Adjust padding for mobile */
                            .mobile-padding {
                                padding: 20px !important;
                            }
                            
                            .mobile-padding-small {
                                padding: 16px !important;
                            }
                            
                            /* Reduce header padding */
                            .header-mobile {
                                padding: 30px 20px !important;
                            }
                            
                            /* Stack columns */
                            .stack-column {
                                display: block !important;
                                width: 100% !important;
                            }
                            
                            /* Adjust font sizes */
                            .mobile-h1 {
                                font-size: 24px !important;
                                line-height: 1.3 !important;
                            }
                            
                            .mobile-h2 {
                                font-size: 18px !important;
                            }
                            
                            .mobile-text {
                                font-size: 14px !important;
                            }
                            
                            /* Adjust button */
                            .mobile-button {
                                padding: 14px 28px !important;
                                font-size: 15px !important;
                            }
                            
                            /* Hide decorative elements on mobile */
                            .hide-mobile {
                                display: none !important;
                                max-height: 0 !important;
                                overflow: hidden !important;
                            }
                            
                            /* Stats section - stack vertically */
                            .stats-mobile {
                                display: block !important;
                                width: 100% !important;
                                border: none !important;
                                border-bottom: 1px solid #e2e8f0 !important;
                                padding: 12px 0 !important;
                            }
                            
                            .stats-mobile:last-child {
                                border-bottom: none !important;
                            }
                            
                            /* Contact info labels */
                            .label-mobile {
                                display: block !important;
                                margin-bottom: 4px !important;
                            }
                        }
                        
                        /* Dark mode support */
                        @media (prefers-color-scheme: dark) {
                            .dark-mode-bg {
                                background-color: #1f1f1f !important;
                            }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f0f4f8; line-height: 1.6;">
                    <!-- Wrapper Table -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f0f4f8; padding: 40px 20px;">
                        <tr>
                            <td align="center">
                                <!-- Main Container -->
                                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);">
                                    
                                    <!-- Header with Logo Area -->
                                    <tr>
                                        <td class="header-mobile" style="background: linear-gradient(135deg, #1E73BE 0%, #155A96 100%); padding: 50px 40px; text-align: center; position: relative;">
                                            <!-- Decorative circles -->
                                            <div class="hide-mobile" style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
                                            <div class="hide-mobile" style="position: absolute; bottom: -30px; left: -30px; width: 120px; height: 120px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
                                            
                                            <h1 class="mobile-h1" style="color: #ffffff; margin: 0 0 12px 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                                                🎯 New Pilot Request
                                            </h1>
                                            <p class="mobile-text" style="color: rgba(255,255,255,0.95); margin: 0; font-size: 17px; font-weight: 400;">
                                                A potential client is interested in your services
                                            </p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Alert Banner -->
                                    <tr>
                                        <td class="mobile-padding-small" style="background: linear-gradient(90deg, #fef3c7 0%, #fde68a 100%); padding: 16px 40px; border-bottom: 3px solid #f59e0b;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="font-size: 14px; color: #92400e; font-weight: 600;">
                                                        ⚡ <strong>Priority:</strong> Respond within 24 hours for best conversion
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                    <!-- Main Content -->
                                    <tr>
                                        <td class="mobile-padding" style="padding: 40px;">
                                            
                                            <!-- Contact Information Section -->
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="mobile-padding-small" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 16px; padding: 28px; margin-bottom: 28px; border: 1px solid #e2e8f0;">
                                                <tr>
                                                    <td>
                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                            <tr>
                                                                <td style="padding-bottom: 20px; border-bottom: 2px solid #e2e8f0;">
                                                                    <h2 class="mobile-h2" style="color: #1E73BE; margin: 0; font-size: 20px; font-weight: 700; display: flex; align-items: center;">
                                                                        <span style="display: inline-block; width: 36px; height: 36px; background: #1E73BE; border-radius: 8px; text-align: center; line-height: 36px; margin-right: 12px;">👤</span>
                                                                        Contact Details
                                                                    </h2>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        
                                                        <!-- Contact Info Grid -->
                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
                                                            <tr>
                                                                <td style="padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
                                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                        <tr>
                                                                            <td width="140" class="label-mobile" style="vertical-align: top;">
                                                                                <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</span>
                                                                            </td>
                                                                            <td style="vertical-align: top;">
                                                                                <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${name}</span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
                                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                        <tr>
                                                                            <td width="140" style="vertical-align: top;">
                                                                                <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                                                                            </td>
                                                                            <td style="vertical-align: top;">
                                                                                <a href="mailto:${email}" style="color: #1E73BE; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center;">
                                                                                    ${email}
                                                                                    <span style="margin-left: 6px; font-size: 12px;">📧</span>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
                                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                        <tr>
                                                                            <td width="140" style="vertical-align: top;">
                                                                                <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Company</span>
                                                                            </td>
                                                                            <td style="vertical-align: top;">
                                                                                <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${company}</span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 14px 0;">
                                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                        <tr>
                                                                            <td width="140" style="vertical-align: top;">
                                                                                <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Service</span>
                                                                            </td>
                                                                            <td style="vertical-align: top;">
                                                                                <span style="background: linear-gradient(135deg, #1E73BE 0%, #155A96 100%); color: white; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; display: inline-block; box-shadow: 0 2px 8px rgba(30, 115, 190, 0.3);">
                                                                                    ${serviceName}
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            ${message ? `
                                            <!-- Requirements Section -->
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 16px; padding: 28px; margin-bottom: 28px; border-left: 5px solid #f59e0b;">
                                                <tr>
                                                    <td>
                                                        <h2 style="color: #92400e; margin: 0 0 16px 0; font-size: 20px; font-weight: 700; display: flex; align-items: center;">
                                                            <span style="display: inline-block; width: 36px; height: 36px; background: #f59e0b; border-radius: 8px; text-align: center; line-height: 36px; margin-right: 12px; color: white;">💬</span>
                                                            Client Requirements
                                                        </h2>
                                                        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                                            <p style="color: #1e293b; margin: 0; line-height: 1.8; font-size: 15px; white-space: pre-wrap;">${message}</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                            ` : ''}
                                            
                                            <!-- Action Buttons -->
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 32px;">
                                                <tr>
                                                    <td align="center" style="padding: 20px 0;">
                                                        <!-- Primary CTA -->
                                                        <a href="mailto:${email}?subject=Re: Your Pilot Request - Aalishaan Global&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in Aalishaan Global BPO Services.%0D%0A%0D%0A" 
                                                           class="mobile-button" style="display: inline-block; background: linear-gradient(135deg, #1E73BE 0%, #155A96 100%); color: #ffffff; padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 8px 20px rgba(30, 115, 190, 0.3); transition: all 0.3s ease;">
                                                            📧 Reply to ${name.split(' ')[0]}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding: 12px 0 0 0;">
                                                        <p style="margin: 0; color: #64748b; font-size: 13px;">
                                                            Or copy email: <a href="mailto:${email}" style="color: #1E73BE; text-decoration: none; font-weight: 600;">${email}</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Quick Stats -->
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 32px; background: #f8fafc; border-radius: 12px; padding: 20px;">
                                                <tr>
                                                    <td>
                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                            <tr>
                                                                <td width="33%" align="center" class="stats-mobile" style="padding: 8px;">
                                                                    <div style="font-size: 24px; margin-bottom: 4px;">📅</div>
                                                                    <div style="font-size: 12px; color: #64748b; font-weight: 600;">RECEIVED</div>
                                                                    <div style="font-size: 13px; color: #1e293b; font-weight: 600; margin-top: 4px;">${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                                                                </td>
                                                                <td width="33%" align="center" style="padding: 8px; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
                                                                    <div style="font-size: 24px; margin-bottom: 4px;">⏰</div>
                                                                    <div style="font-size: 12px; color: #64748b; font-weight: 600;">TIME</div>
                                                                    <div style="font-size: 13px; color: #1e293b; font-weight: 600; margin-top: 4px;">${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                                                                </td>
                                                                <td width="33%" align="center" style="padding: 8px;">
                                                                    <div style="font-size: 24px; margin-bottom: 4px;">🎯</div>
                                                                    <div style="font-size: 12px; color: #64748b; font-weight: 600;">PRIORITY</div>
                                                                    <div style="font-size: 13px; color: #f59e0b; font-weight: 700; margin-top: 4px;">HIGH</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td class="mobile-padding" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 32px 40px; text-align: center;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                                        <p style="color: #94a3b8; margin: 0; font-size: 14px; line-height: 1.6;">
                                                            This email was automatically generated from your website contact form
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding-top: 16px;">
                                                        <p style="color: #64748b; margin: 0; font-size: 13px;">
                                                            © ${new Date().getFullYear()} <strong style="color: #6F8FA6;">Aalishaan Global BPO Services</strong>
                                                        </p>
                                                        <p style="color: #475569; margin: 8px 0 0 0; font-size: 12px;">
                                                            Customer Support Outsourcing | Based in India 🇮🇳
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
