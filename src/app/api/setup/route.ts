import { NextResponse } from 'next/server';
import { sql, initializeDatabase } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        // Initialize database tables
        await initializeDatabase();

        // Check if admin exists
        const existingAdmin = await sql`
            SELECT id FROM admins WHERE email = 'kabadwalsarthak@gmail.com'
        `;

        if (existingAdmin.length === 0) {
            // Create default admin
            const hashedPassword = await bcrypt.hash('Admin@123', 12);
            await sql`
                INSERT INTO admins (email, password, name)
                VALUES ('kabadwalsarthak@gmail.com', ${hashedPassword}, 'Admin')
            `;
            console.log('Default admin created');
        }

        return NextResponse.json({
            success: true,
            message: 'Database initialized successfully',
            admin: {
                email: 'kabadwalsarthak@gmail.com',
                password: 'Admin@123 (Please change this!)'
            }
        });
    } catch (error) {
        console.error('Setup error:', error);
        return NextResponse.json(
            { error: 'Failed to initialize database', details: String(error) },
            { status: 500 }
        );
    }
}
