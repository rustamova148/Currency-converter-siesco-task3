# 💱 Currency Converter 

Bu layihə sadə bir valyuta çevirmə tətbiqidir. İstifadəçi seçilmiş valyutalar arasında məbləği çevirmək üçün interfeys vasitəsilə istədiyi dəyərləri daxil edə bilər.

## 🔧 İstifadə Edilən Texnologiyalar

- **React** – Komponent əsaslı UI yaradılması üçün
- **JavaScript (ES6+)**
- **Axios** – API istəkləri üçün
- **REST API** – Valyuta kodlarını və çevirmə nəticəsini backend-dən almaq üçün
- **CSS** – Stil vermə məqsədilə

## 📦 Quraşdırma və İşə Salma

1. Bu repozitoriyanı klonlayın:

```bash
git clone https://github.com/rustamova148/Currency-converter-siesco-task3.git
cd Currency-converter-siesco-task3

2. Lazımi paketləri quraşdırın:

```bash
npm install

3. Layihəni lokal serverdə işə salın:

```bash
npm run dev

4. Tətbiq açılacaq: http://localhost:7083

🚀 Funksionallıqlar

API-dən dəstəklənən valyuta kodlarının alınması

from və to valyutalarının seçilməsi

İstifadəçi tərəfindən məbləğin daxil edilməsi

Çevrilmiş məbləğin göstərilməsi

🛠 Backend API-lar

Bu frontend tətbiq backend tərəfindən təqdim olunan aşağıdakı endpoint-lərlə işləyir:

POST /api/Currency/Supported – Dəstəklənən valyutaların siyahısını gətirir

POST /api/Currency/Convert – Valyuta çevirmə funksionallığını təmin edir
