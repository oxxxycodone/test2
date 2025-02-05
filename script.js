const sourceVideo = document.getElementById('source-video');
const videoContainers = document.querySelectorAll('.video-container');

// Для каждого контейнера создаем видео с разным расположением
videoContainers.forEach(container => {
  const clonedVideo = sourceVideo.cloneNode(true);
  clonedVideo.style.display = 'block'; // Показываем видео
  
  // Устанавливаем разные позиции видео
  const position = container.getAttribute('data-position');
  clonedVideo.style.objectPosition = position;

  container.appendChild(clonedVideo);
});