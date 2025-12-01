# ToDo App

Невеликий застосунок для управління списком завдань.
Реалізовано базові можливості — створення, редагування, видалення та відмітка виконання завдання.
Проєкт зроблено на базі Vite з використанням React та Redux.

## Використані технології

- Vite
- React
- Redux
- React-Redux
- Vanilla CSS
- react-responsive-pagination

## Функціональність

 Робота зі списком завдань:
- Створення нової задачі
- Редагування тексту задачі (через модальне вікно)
- Видалення задачі
- Перемикання стану виконання (checkbox)

 Пагінація:
- Автоматичний розподіл задач на сторінки
- Кількість задач на сторінці задається у стані Redux
- Перемикання сторінок через react-responsive-pagination

 Отримання даних:
- Початковий список задач завантажується з JSONPlaceholder (fetch у компоненті App)

## Redux: структура стану

- tasks: [],          // Список завдань
- currentPage: 1,     // Номер активної сторінки
- tasksPerPage: 8     // Кількість завдань на сторінці

## Actions:

- setTasks
- addTask
- deleteTask
- updateTask
- toggleCompleted
- setCurrentPage

## Встановлення та запуск

1. Клонувати репозиторій:
git clone (https://github.com/your-username/your-repo.git)

2. Перейти у папку проєкту:
cd your-repo

3. Встановити залежності:
npm install

4. Запустити у режимі розробки:
npm run dev

5. Зібрати production-версію:
npm run build
