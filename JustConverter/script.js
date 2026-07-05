// dropZone.addEventListener("dragover", (e) => {
//   const fileItems = [...e.dataTransfer.items].filter(
//     (item) => item.kind === "file",
//   );
//   if (fileItems.length > 0) {
//     e.preventDefault();
//     if (fileItems.some((item) => item.type.startsWith("image/"))) {
//       e.dataTransfer.dropEffect = "copy";
//     } else {
//       e.dataTransfer.dropEffect = "none";
//     }
//   }
// });


// window.addEventListener("dragover", (e) => {
//   const fileItems = [...e.dataTransfer.items].filter(
//     (item) => item.kind === "file",
//   );
//   if (fileItems.length > 0) {
//     e.preventDefault();
//     if (!dropZone.contains(e.target)) {
//       e.dataTransfer.dropEffect = "none";
//     }
//   }
// });

// Находим элемент с учетом правильного регистра в HTML (id="dropzone")
const dropZone = document.getElementById("dropzone");

// 1. Обработка dragover на самой зоне сброса
dropZone.addEventListener("dragover", (e) => {
    const fileItems = [...e.dataTransfer.items].filter(item => item.kind === "file");
    
    if (fileItems.length > 0) {
        e.preventDefault(); // Разрешаем сброс в этой зоне
        
        // Разрешаем копирование только если есть картинки
        if (fileItems.some(item => item.type.startsWith("image/"))) {
            e.dataTransfer.dropEffect = "copy";
        } else {
            e.dataTransfer.dropEffect = "none";
        }
    }
});

// 2. Блокируем dragover для всего остального окна
window.addEventListener("dragover", (e) => {
    const fileItems = [...e.dataTransfer.items].filter(item => item.kind === "file");
    
    if (fileItems.length > 0) {
        // Если перетаскивают НЕ над dropZone, визуально показываем запрет
        if (!dropZone.contains(e.target)) {
            e.dataTransfer.dropEffect = "none";
        }
        // ВАЖНО: не вызываем e.preventDefault() вне dropZone, 
        // чтобы браузер понимал, что сюда сбрасывать нельзя
    }
});

// 3. ГЛАВНОЕ ИСПРАВЛЕНИЕ: Блокируем стандартное открытие файла браузером при drop
window.addEventListener("drop", (e) => {
    // Если файл сбросили мимо dropZone, отменяем открытие файла во вкладке
    if (!dropZone.contains(e.target)) {
        e.preventDefault();
    }
});
