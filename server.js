console.log("Iniciando o servidor...");

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

// Configuração do CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portifolio-vue-delta.vercel.app',
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// Configuração do banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mensagens',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1); // Finaliza o processo em caso de erro
  }
  console.log(`Conectado ao banco de dados! Host: ${process.env.DB_HOST}`);
});

// Rota para envio de formulário
app.post('/enviar-formulario', async (req, res) => {
  const { email, subject, message } = req.body;

  // Validação dos campos obrigatórios
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

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Contato do Formulário <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject,
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

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Banco de Dados Host: ${process.env.DB_HOST}`);
  console.log(`E-mail Usuário: ${process.env.EMAIL_USER}`);
});
