const http = require('http');

// กำหนด Port ที่ Server จะเปิดใช้งาน (Render จะกำหนดค่านี้ให้ผ่าน process.env.PORT)
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // 1. ตั้งค่า Header ให้ตอบกลับเป็นตัวอักษรแบบ UTF-8 (เพื่อให้อ่านภาษาไทยได้)
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    
    // 2. ออกแบบหน้าตา HTML + CSS (Modern Card Style)
    const htmlOutput = `
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web Server Assignment</title>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            body {
                font-family: 'ChulaCharas', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #e0eafc, #cfdef3);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            .card {
                background: white;
                padding: 2.5rem;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                text-align: center;
                max-width: 450px;
                width: 90%;
                border-top: 6px solid #4a90e2;
                transition: transform 0.3s ease;
            }
            .card:hover {
                transform: translateY(-5px);
            }
            h1 {
                font-size: 1.6rem;
                color: #2c3e50;
                margin-bottom: 1.5rem;
                font-weight: 600;
            }
            .info-container {
                background: #f8f9fa;
                padding: 1.2rem;
                border-radius: 10px;
                text-align: left;
                border-left: 4px solid #4a90e2;
                margin-bottom: 1.5rem;
            }
            p {
                font-size: 1.05rem;
                margin-bottom: 0.6rem;
                line-height: 1.5;
            }
            p:last-child {
                margin-bottom: 0;
            }
            .label {
                color: #7f8c8d;
                font-weight: bold;
            }
            .value {
                color: #2c3e50;
                margin-left: 5px;
            }
            .badge {
                display: inline-block;
                padding: 0.35rem 0.8rem;
                background: #2ecc71;
                color: white;
                border-radius: 50px;
                font-size: 0.85rem;
                font-weight: bold;
                letter-spacing: 0.5px;
            }
        </style>
    </head>
    <body>

        <div class="card">
            <h1>ใบงานปฏิบัติการ: Web Server</h1>
            
            <div class="info-container">
                <p><span class="label">รหัสนักศึกษา:</span> <span class="value">69319011594</span></p>
                <p><span class="label">ชื่อ-นามสกุล:</span> <span class="value">นาย จิรภัทร มิตรานนท์ </span></p>
            </div>

            <span class="badge">● Server Online</span>
        </div>

    </body>
    </html>
    `;
    
    // 3. สิ้นสุดการทำงานและส่งข้อมูลทั้งหมดออกไปในครั้งเดียว
    res.end(htmlOutput);
});

// สั่งให้ Server รันตาม Port ที่กำหนด
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
