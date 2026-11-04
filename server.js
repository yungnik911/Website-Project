const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 

// podkluchenie k bd
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gaya"
});

// registracia
app.post("/register", async (req, res) => {
    const { email, name, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    
    const sql = "INSERT INTO users (email, name, password) VALUES (?, ?, ?)";
    con.execute(sql, [email, name, hash], (err) => {
        if (err) return res.status(400).send("Ошибка, Возможно, email уже занят.");
        res.send("Регистрация успешна");
    });
});

// vhod
app.post("/login", (req, res) => {
    const { name, password } = req.body;
    
    const sql = "SELECT * FROM users WHERE name = ?";
    con.execute(sql, [name], async (err, results) => {
        if (results.length === 0) return res.status(400).send("Аккаунт не найден");

        const match = await bcrypt.compare(password, results[0].password);
        if (match) {
            res.send("Успешный вход");
        } else {
            res.status(400).send("Неверный пароль");
        }
    });
});

app.listen(3000, () => console.log("Сервер работает на порту 3000"));