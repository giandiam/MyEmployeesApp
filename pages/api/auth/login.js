import pool from '../../../lib/db';

export default async function handler(req, res) {
	let client;
	try {
		client = await pool.connect();
        console.log('yessss');
	}
	catch (e) {
		console.trace(e);
		if (client) {
			client.release();
		}
		res.statusCode = 500;
		res.json({
			status: 'error',
			error: 'Please contact the administrator'
		});
	}
	

}