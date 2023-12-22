# School API ExpressJS

School API ExpressJS adalah server backend yang dirancang untuk mendukung aplikasi School API. Dibangun dengan menggunakan framework Express.js, server ini menyediakan layanan backend yang kuat untuk mengelola data sekolah, seperti informasi siswa, guru, kelas, dan banyak lagi.

## Instalasi Docker Environment

Berikut adalah langkah-langkah untuk menginstal dan menjalankan aplikasi:

1. **Prasyarat:**
    - Pastikan Anda sudah menginstall NodeJS di server atau local machine.
    - Pastikan Anda sudah menginstall ```Docker CLI```.

2. **Menjalankan Aplikasi:**
    - Buatkan sebuah folder project dengan nama ```Project-School-API``` dan masuk ke directory project.
    - Lalu buatkan 1 file dengan nama ```docker-compose.yml``` dengan isi code seperti berikut ini.

    ```yml
    version: '3.7'
    services:
      web:
        container_name: school_api_container
        image: kanglerian/school-api:0.0.1
        ports:
          - "8883:8883"
        restart: unless-stopped
    ```

    - Lalu jalankan dengan perintah ```docker-compose up -d```.
