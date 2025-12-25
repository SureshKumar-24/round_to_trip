import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-in-production';

// Verify admin token
function verifyToken(request: NextRequest) {
    const token = request.cookies.get('admin_token')?.value;
    if (!token) return null;

    try {
        return jwt.verify(token, JWT_SECRET);
    } catch {
        return null;
    }
}

// GET - List all contacts with pagination
export async function GET(request: NextRequest) {
    const admin = verifyToken(request);
    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status') || '';
    const search = searchParams.get('search') || '';
    const offset = (page - 1) * limit;

    try {
        // Build query based on filters
        let contacts;
        let totalResult;

        if (status && search) {
            contacts = await sql`
                SELECT * FROM contacts 
                WHERE status = ${status} 
                AND (name ILIKE ${'%' + search + '%'} OR email ILIKE ${'%' + search + '%'} OR company ILIKE ${'%' + search + '%'})
                ORDER BY created_at DESC 
                LIMIT ${limit} OFFSET ${offset}
            `;
            totalResult = await sql`
                SELECT COUNT(*) as total FROM contacts 
                WHERE status = ${status} 
                AND (name ILIKE ${'%' + search + '%'} OR email ILIKE ${'%' + search + '%'} OR company ILIKE ${'%' + search + '%'})
            `;
        } else if (status) {
            contacts = await sql`
                SELECT * FROM contacts 
                WHERE status = ${status} 
                ORDER BY created_at DESC 
                LIMIT ${limit} OFFSET ${offset}
            `;
            totalResult = await sql`
                SELECT COUNT(*) as total FROM contacts WHERE status = ${status}
            `;
        } else if (search) {
            contacts = await sql`
                SELECT * FROM contacts 
                WHERE name ILIKE ${'%' + search + '%'} OR email ILIKE ${'%' + search + '%'} OR company ILIKE ${'%' + search + '%'}
                ORDER BY created_at DESC 
                LIMIT ${limit} OFFSET ${offset}
            `;
            totalResult = await sql`
                SELECT COUNT(*) as total FROM contacts 
                WHERE name ILIKE ${'%' + search + '%'} OR email ILIKE ${'%' + search + '%'} OR company ILIKE ${'%' + search + '%'}
            `;
        } else {
            contacts = await sql`
                SELECT * FROM contacts 
                ORDER BY created_at DESC 
                LIMIT ${limit} OFFSET ${offset}
            `;
            totalResult = await sql`
                SELECT COUNT(*) as total FROM contacts
            `;
        }

        const total = parseInt(totalResult[0]?.total || '0');
        const totalPages = Math.ceil(total / limit);

        return NextResponse.json({
            success: true,
            data: contacts,
            pagination: {
                page,
                limit,
                total,
                totalPages,
                hasNext: page < totalPages,
                hasPrev: page > 1
            }
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contacts' },
            { status: 500 }
        );
    }
}
