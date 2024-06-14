const mysql = require('mysql2/promise');
const dbConfig = require('../../db/db');

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const connection = await mysql.createConnection(dbConfig);
        const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id = ?', [userId]);
        await connection.end();
        
        if (rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Error fetching user' });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
        await connection.end();
        
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
};

module.exports = {
    getUserById,
    createUser,
    
};
