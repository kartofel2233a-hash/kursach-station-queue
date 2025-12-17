Встановлення проєкту
1. Розпакування застосунку

Розархівуйте проєкт у директорію:

C:\laragon\www


Наприклад, якщо ім’я вашого проєкту kross_shop, після розпаковування структура повинна виглядати так:

C:\laragon\www\kross_shop

2. Налаштування конфігурації

Відкрийте файл .env у корені проєкту та переконайтеся, що параметри підключення до бази даних вказані правильно:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kross_shop_db
DB_USERNAME=root
DB_PASSWORD=


Переконайтесь, що назва бази даних (DB_DATABASE) збігається з тією, яку ви створили у phpMyAdmin.

3. Підготовка Laravel-додатку

У корені проєкту виконайте такі команди:

php artisan key:generate
php artisan config:cache
php artisan migrate
php artisan storage:link


Що роблять ці команди:

key:generate — створює унікальний ключ застосунку

config:cache — оновлює кеш конфігурацій

migrate — виконує міграції та створює необхідні таблиці

storage:link — створює символьне посилання для роботи з файлами у /storage

4. Запуск локального сервера

Для запуску Laravel-сервера командою Artisan:

php artisan serve


Або просто відкрийте браузер і перейдіть за адресою:

http://localhost/kross_shop


(якщо використовуєте Laragon з авто-віртуальними хостами)