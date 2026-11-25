const express = require('express');

// ایجاد سرور
const server = express();

// تعیین پورت سرور
const port = 3000;

// تعریف مسیر اصلی و ارسال پاسخ از سرور
server.get('/', (req, res) => {
    res.send('Hello World!');
});

// اجرای سرور
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
