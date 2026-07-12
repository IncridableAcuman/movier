# 🎬 Movier — Zamonaviy Kino Portali

**Movier** — foydalanuvchilarga eng soʻnggi va ommabop kinolarni koʻrish, qidirish va batafsil maʼlumotlarni (jumladan, rasmiy treylerlar va reytinglarni) kuzatish imkonini beruvchi zamonaviy veb-ilova. Loya **Spring Boot (Java 21)** backend va **React 19 (TypeScript) + Tailwind CSS v4** frontend texnologiyalari asosida mukammal arxitekturada qurilgan.

Tashqi maʼlumotlar provayderi sifatida mashhur **The Movie Database (TMDB) API** xizmatidan foydalaniladi. Xavfsizlikni taʼminlash maqsadida, barcha API kalitlari va soʻrovlar backend orqali proksi qilinadi.

---

## 🚀 Texnologiyalar Steki

Loyiha eng zamonaviy va barqaror kutubxonalar hamda texnologiyalar yordamida ishlab chiqilgan:

### 💻 Frontend (Mijoz qismi)
*   **Kutubxona:** [React 19](https://react.dev/) — Eng so'nggi barqaror versiya.
*   **Dasturlash tili:** [TypeScript](https://www.typescriptlang.org/) — Tizim ishonchliligi va tip xavfsizligi uchun.
*   **Assembly & Bundler:** [Vite](https://vitejs.dev/) — Tezkor rivojlanish va build jarayoni.
*   **Dizayn & Stil:** [Tailwind CSS v4](https://tailwindcss.com/) — Yuqori samarali va moslashuvchan CSS freymvorki.
*   **Animatsiyalar:** [Framer Motion](https://www.framer.com/motion/) — Ravon va jozibali interaktiv o'tishlar.
*   **Ikonkalar:** [Lucide React](https://lucide.dev/) — Minimalistik va chiroyli SVG ikonkalar to'plami.
*   **Yo'naltirish (Routing):** [React Router DOM v7](https://reactrouter.com/) — Sahifalararo tezkor o'tish.
*   **Tarmoq so'rovlari:** [Axios](https://axios-http.com/) — Backend API bilan integratsiya uchun.
*   **Bildirishnomalar:** [React Toastify](https://github.com/fkhadra/react-toastify) — Foydalanuvchi bilan aloqani yaxshilovchi xabarnomalar.

### ⚙️ Backend (Server qismi)
*   **Dasturlash tili:** [Java 21](https://www.oracle.com/java/technologies/downloads/) — Zamonaviy Virtual Thread va samarali til imkoniyatlari.
*   **Freymvork:** [Spring Boot 4.1.0](https://spring.io/projects/spring-boot) — Kuchli, xavfsiz va moslashuvchan backend asosi.
*   **Loyihani boshqarish:** [Gradle](https://gradle.org/) — Bog'liqliklar va build jarayonlarini avtomatlashtirish.
*   **Konfiguratsiya:** `java-dotenv` — Atrof-muhit o'zgaruvchilarini (`.env`) xavfsiz yuklash.
*   **Kutubxonalar:**
    *   `Spring WebMVC` (REST controllerlar va CORS boshqaruvi).
    *   `Spring RestTemplate` (TMDB API bilan aloqa).
    *   `Lombok` (Kodni qisqartirish va boilerplate-dan xalos bo'lish uchun).
    *   `Spring Boot Validation` (Kirish ma'lumotlarini tekshirish).

---

## 📐 Loyiha Arxitekturasi

Loyiha **Client-Server-ExternalAPI** modeliga asoslangan. TMDB API kalitini xavfsiz saqlash va frontend va backend o'rtasidagi so'rovlarni optimallashtirish uchun quyidagicha ishlaydi:

```
+------------------------+             +------------------------+             +------------------------+
|                        |   HTTP      |                        |   HTTP      |                        |
|   React 19 Frontend    | ----------> |  Spring Boot Backend   | ----------> |     TMDB API v3        |
|     (Port: 5173)       | <---------- |      (Port: 8080)      | <---------- | (External Movie Data)  |
|                        |  JSON DTO   |                        |  JSON DTO   |                        |
+------------------------+             +------------------------+             +------------------------+
```

### Nega bu yondashuv tanlandi?
1.  **Xavfsizlik (Security):** TMDB maxfiy API kalitlari brauzerda (frontendda) ko'rinmaydi. Ular serverda `.env` faylida xavfsiz saqlanadi.
2.  **CORS Muammosining Yechimi:** Frontend to'g'ridan-to'g'ri TMDB'ga so'rov yubormaydi, balki Spring Boot backendimizda sozlangan CORS ruxsatnomalari orqali xavfsiz muloqot qiladi.
3.  **Ma'lumotlar Tozaligi (DTO mapping):** TMDB'dan qaytadigan murakkab JSON ma'lumotlari serverda Java klasslariga (DTO) o'girilib, mijoz uchun faqat kerakli ma'lumotlar qulay formatda yuboriladi.

---

## ✨ Imkoniyatlar va Funksiyalar

*   **Cinematic Hero Section:** Bosh sahifada eng so'nggi namoyish etilayotgan kinolardan birining katta banner formati, IMDb reytingi, qisqacha tavsifi va "Tomosha qilish" tugmasi joylashadi.
*   **Kategoriyalar Bo'yicha Saralash:** Kinolar 3 xil asosiy blokda ko'rsatiladi:
    1.  *Ommabop Kinolar (Popular)*
    2.  *Eng Yuqori Reytingli (Top Rated)*
    3.  *Tez Kunlarda (Upcoming)*
*   **Batafsil Ma'lumot Sahifasi (`/movie/:id`):** 
    *   Kino posteri va fon rasmi (backdrop).
    *   Kino shiori (tagline) va reliz sanasi.
    *   Janrlar ro'yxati va sinopsis (overview).
    *   **Rasmiy Treyler:** YouTube orqali o'rnatilgan rasmiy video/treyler pleyeri.
*   **Global Qidiruv (Search):** Kalit so'zlar orqali real vaqt rejimida kinolarni qidirish imkoniyati.
*   **Premium UI/UX:** To'liq qorong'i rejim (dark theme), yuklanish animatsiyalari, interaktiv kartochkalar va xatoliklarni chiroyli ko'rsatuvchi xabarnomalar.

---

## 🛠️ Loyihani O'rnatish va Ishga Tushirish

Loyihani kompyuteringizda ishga tushirish uchun quyidagi ko'rsatmalarni bajaring:

### 📋 Talablar
*   **Java JDK 21** yoki undan yuqori versiya.
*   **Node.js v22** yoki undan yuqori versiya.
*   **TMDB API Key** ([Bu yerdan](https://www.themoviedb.org/) ro'yxatdan o'tib, bepul API kaliti oling).

---

### 1️⃣ Backendni Sozlash va Ishga Tushirish (Server)

1.  `server` katalogiga o'ting:
    ```bash
    cd server
    ```

2.  Environment o'zgaruvchilari uchun `.env` faylini yarating:
    ```bash
    touch .env
    ```

3.  `.env` fayliga o'zingizning TMDB sozlamalaringizni yozing:
    ```env
    MOVIE_KEY=sizning_tmdb_api_kalitingiz
    MOVIE_URL=https://api.themoviedb.org/3
    ```

4.  Gradle yordamida serverni ishga tushiring:
    *   **Linux/macOS:**
        ```bash
        ./gradlew bootRun
        ```
    *   **Windows:**
        ```cmd
        gradlew.bat bootRun
        ```

Server sukut bo'yicha **`http://localhost:8080`** manzilida ishga tushadi.

---

### 2️⃣ Frontendni Sozlash va Ishga Tushirish (Client)

1.  Boshqa terminalda `client` katalogiga o'ting:
    ```bash
    cd client
    ```

2.  Kerakli paketlarni o'rnating:
    ```bash
    npm install
    ```

3.  Loyihani ishlab chiqish rejimida (Development mode) ishga tushiring:
    ```bash
    npm run dev
    ```

Veb-ilova **`http://localhost:5173`** manzilida ochiladi va server bilan muloqotni boshlaydi.

---

## 🐳 Docker orqali ishga tushirish

Loyihaning har bir qismi uchun alohida Dockerfile tayyorlangan. Docker Compose orqali butun loyihani birgina buyruq bilan ishga tushirishingiz mumkin:

`docker-compose.yaml` namuna fayli:
```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./server
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - MOVIE_KEY=sizning_tmdb_api_kalitingiz
      - MOVIE_URL=https://api.themoviedb.org/3
    restart: always

  frontend:
    build:
      context: ./client
      dockerfile: Dockerfile
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: always
```

Loyihani ishga tushirish buyrug'i:
```bash
docker-compose up --build
```

---

## 📡 API Endpoints (Backend doiralari)

Server quyidagi marshrutlar orqali xizmat ko'rsatadi:

| Metod | Endpoint | Parametrlar | Tavsif |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/movie` | `category` (Masalan: `now_playing`, `popular`, `top_rated`, `upcoming`) | Ma'lum toifadagi kinolar ro'yxatini olish |
| **GET** | `/api/v1/movie/{id}` | `id` (Kino ID raqami) | Kinoning barcha tafsilotlarini olish |
| **GET** | `/api/v1/search/movie` | `query` (Qidiruv matni) | Kinolarni nomi bo'yicha qidirish |
| **GET** | `/api/v1/movie/{id}/videos` | `id` (Kino ID raqami) | Kinoga tegishli YouTube treylerlar ro'yxatini olish |

---

## 📁 Loyiha Tuzilishi

```text
movier/
├── client/                  # React Frontend ilovasi
│   ├── src/
│   │   ├── components/      # MovieCard va Navbar komponentlari
│   │   ├── pages/           # Home, MovieDetails va Search sahifalari
│   │   ├── services/        # API so'rovlari xizmati (Axios)
│   │   └── types/           # TypeScript interfeyslari
│   └── Dockerfile           # Frontend uchun Docker sozlamalari
│
├── server/                  # Spring Boot Backend ilovasi
│   ├── src/main/java/com/movie/server/
│   │   ├── config/          # CORS va RestTemplate sozlamalari
│   │   ├── controller/      # REST API Controller
│   │   ├── dto/             # Ma'lumotlarni qabul qilish DTO modellari
│   │   ├── exception/       # Global xatoliklarni ushlab qolish xizmati
│   │   └── service/         # TMDB API bilan ishlovchi logikalar
│   └── Dockerfile           # Backend uchun Docker sozlamalari
│
└── docker-compose.yaml      # Butun loyihani konteynerda boshqarish
```

---

## 🤝 Hissa qo'shish (Contributing)

Agar siz loyihani yaxshilamoqchi bo'lsangiz:
1. Loyihani **Fork** qiling.
2. Yangi tarmoq oching (`git checkout -b feature/AmazingFeature`).
3. O'zgarishlarni kiritib, **Commit** qiling (`git commit -m 'Add AmazingFeature'`).
4. Tarmoqni yuklang (`git push origin feature/AmazingFeature`).
5. **Pull Request** yuboring.

---

## 📝 Muallif va Litsenziya

*   **Dasturchi:** [Izzatbek](https://github.com/Izzatbek)
*   **Litsenziya:** Ushbu loyiha [MIT](LICENSE) litsenziyasi ostida taqdim etiladi.

---
⭐ **Agarda ushbu loyiha sizga yoqqan bo'lsa, unga yulduzcha (star) berishni unutmang!**
