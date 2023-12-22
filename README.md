# School API ExpressJS

School API ExpressJS adalah server backend yang dirancang untuk mendukung aplikasi School API. Dibangun dengan menggunakan framework Express.js, server ini menyediakan layanan backend yang kuat untuk mengelola data sekolah, seperti informasi siswa, guru, kelas, dan banyak lagi.

## Instalasi Docker Environment

Berikut adalah langkah-langkah untuk menginstal dan menjalankan aplikasi:

1. **Prasyarat:**

  - Pastikan Anda sudah menginstall `NodeJS` di server atau local machine.
  - Pastikan Anda sudah menginstall `Docker CLI`.

2. **Menjalankan Aplikasi:**

  - Buatkan sebuah folder project dengan nama `Project-School-API` dan masuk ke directory project.
  - Lalu buatkan 1 file dengan nama `docker-compose.yml` dengan isi code seperti berikut ini.


      ```yml
      version: "3.7"
      services:
        web:
          container_name: school_api_container
          image: kanglerian/school-api:<version>
          ports:
            - "8883:8883"
          restart: unless-stopped
      ```

  - Ganti `<version>` dengan tag yang ada di repository `Docker Hub`.
  - Lalu jalankan dengan perintah `docker-compose up -d`.

## Cara Pembuatan Docker Image

Berikut adalah langkah-langkah untuk membuat docker image dan push ke Repository Docker:

1. **Persiapan Pembuatan Tag Repository:**

  - Lakukan proses ini dengan menjalankan perintah:


    ```bash
    docker build -t name-docker-images .
    ```

  - Ganti `name-docker-images` sesuai dengan yang diinginkan.
  - Lakukan perintah `tag` untuk persiapan push ke repository docker.


    ```bash
    docker tag name-docker-images nama-pengguna/nama-repository:versi
    ```

  - Ganti `name-docker-images` sesuai dengan yang diinginkan.
  - Ganti `nama-pengguna` sesuai dengan akun repository anda di Docker Hub.
  - Ganti `nama-repository` sesuai dengan nama repository yang anda inginkan.
  - Ganti `versi` sesuai dengan versi yang anda inginkan.

2. **Persiapan Push Ke Repository:**

  - Lakukan proses ini dengan menjalankan perintah:


    ```bash
    docker push nama-pengguna/nama-repositori:versi
    ```

  - Ganti `<name-docker-images>` sesuai dengan yang diinginkan.
  - Ganti `nama-pengguna` sesuai dengan akun repository anda di Docker Hub.
  - Ganti `nama-repository` sesuai dengan nama repository yang anda inginkan.
  - Ganti `versi` sesuai dengan versi yang anda inginkan.


## Penulis

Penulis: Lerian Febriana, A.Md.Kom

Programmer: Lerian Febriana, A.Md.Kom

  - [Website](https://kanglerian.vercel.app)
  - [Instagram](https://instagram.com/kanglerian)
  - [Github](https://github.com/kanglerian)