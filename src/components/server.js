const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors()); // Permite requisições de todas as origens (CORS)
app.use(express.json()); // Permite parsing de JSON nas requisições

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Stopcrazy1', // Substitua pela sua senha do MySQL
    database: 'mensagens',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
    console.log('Conectado ao banco de dados!');
});

// Endpoint para salvar mensagem no banco e enviar por e-mail
app.post('/enviar-formulario', async (req, res) => {
    const { email, subject, message } = req.body;

    // Validação dos campos obrigatórios
    if (!email || !subject || !message) {
        return res.status(400).send('Por favor, preencha todos os campos obrigatórios.');
    }

    // Query para salvar no banco de dados
    const sql = `INSERT INTO mensagens (email, subject, message) VALUES (?, ?, ?)`;
    const values = [email, subject, message];

    db.query(sql, values, async (err, result) => {
        if (err) {
            console.error('Erro ao salvar mensagem no banco de dados:', err);
            return res.status(500).send('Erro ao salvar mensagem no banco.');
        }

        console.log('Mensagem salva no banco de dados!');

        // Configuração para envio de e-mail usando Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'webertfernandes16@gmail.com', // Seu e-mail
                pass: 'suaSenhaDeAplicativo', // Substitua pela senha de aplicativo do Gmail
            },
        });

        const mailOptions = {
            from: email, // E-mail do remetente
            to: 'webertfernandes16@gmail.com', // Seu e-mail que receberá a mensagem
            subject: subject, // Assunto da mensagem
            text: message, // Conteúdo da mensagem
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('E-mail enviado com sucesso!');
            res.status(200).send('Mensagem salva e enviada com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            res.status(500).send('Mensagem salva, mas ocorreu um erro ao enviar o e-mail.');
        }
    });
});

// Inicializa o servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
