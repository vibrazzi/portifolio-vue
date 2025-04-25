console.log("Iniciando o servidor...");

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();

// Configuração de CORS com suporte para dispositivos móveis e produção
app.use(cors({
    origin: [
        'http://localhost:5173', // Ambiente local
        'https://portifolio-vue-delta.vercel.app' // URL do frontend no deploy
    ],
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express.json());

// Configuração da conexão com o banco de dados MySQL usando variáveis de ambiente
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Stopcrazy1',
    database: process.env.DB_NAME || 'mensagens',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    }
    console.log('Conectado ao banco de dados!');
});

// Rota para salvar mensagens e enviar e-mail
app.post('/enviar-formulario', async (req, res) => {
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
        console.warn('Campos obrigatórios ausentes!');
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
    }

    const query = 'INSERT INTO mensagens (email, subject, message) VALUES (?, ?, ?)';
    const values = [email, subject, message];

    db.query(query, values, async (err) => {
        if (err) {
            console.error('Erro ao salvar no banco de dados:', err);
            return res.status(500).json({ error: 'Erro ao salvar mensagem no banco.' });
        }

        console.log('Mensagem salva no banco de dados.');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Carregado da variável de ambiente
                pass: process.env.EMAIL_PASS, // Carregado da variável de ambiente
            },
        });

        const mailOptions = {
            from: `Contato do Formulário <${email}>`,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: `Você recebeu uma nova mensagem de contato:\n\nDe: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('E-mail enviado com sucesso!');
            return res.status(200).json({ success: 'Mensagem salva e enviada com sucesso!' });
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            return res.status(500).json({ error: 'Mensagem salva, mas houve um erro ao enviar o e-mail.' });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
