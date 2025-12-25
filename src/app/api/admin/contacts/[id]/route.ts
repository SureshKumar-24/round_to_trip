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

// GET - Get single contact by ID
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = verifyToken(request);
    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    try {
        const contacts = await sql`
            SELECT * FROM contacts WHERE id = ${parseInt(id)}
        `;

        if (contacts.length === 0) {
            return NextResponse.json(
                { error: 'Contact not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: contacts[0]
        });
    } catch (error) {
        console.error('Error fetching contact:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contact' },
            { status: 500 }
        );
    }
}

// PATCH - Update contact status
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = verifyToken(request);
    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const { status } = await request.json();

    if (!status) {
        return NextResponse.json(
            { error: 'Status is required' },
            { status: 400 }
        );
    }

    const validStatuses = ['new', 'contacted', 'in_progress', 'completed', 'archived'];
    if (!validStatuses.includes(status)) {
        return NextResponse.json(
            { error: 'Invalid status' },
            { status: 400 }
        );
    }

    try {
        const result = await sql`
            UPDATE contacts 
            SET status = ${status}, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ${parseInt(id)}
            RETURNING *
        `;

        if (result.length === 0) {
            return NextResponse.json(
                { error: 'Contact not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.error('Error updating contact:', error);
        return NextResponse.json(
            { error: 'Failed to update contact' },
            { status: 500 }
        );
    }
}

// DELETE - Delete contact
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = verifyToken(request);
    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    try {
        const result = await sql`
            DELETE FROM contacts WHERE id = ${parseInt(id)} RETURNING id
        `;

        if (result.length === 0) {
            return NextResponse.json(
                { error: 'Contact not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Contact deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting contact:', error);
        return NextResponse.json(
            { error: 'Failed to delete contact' },
            { status: 500 }
        );
    }
}
