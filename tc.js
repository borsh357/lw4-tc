var tcItems = document.querySelectorAll('.tc-space-primary .tc-item');

tcItems[0].focus();
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37: // Left arrow - focus on the primary working space
      tcItems = document.querySelectorAll('.tc-space-primary .tc-item');
      tcItems[0].focus();
      break;

    case 39: // Right arrow - focus on the secondary working space
      tcItems = document.querySelectorAll('.tc-space-secondary .tc-item');
      tcItems[0].focus();
      break;

    case 38: // Up arrow - focus on the upper element
      for (var i = 0; i < tcItems.length; i++) {
        if (tcItems[i] == document.activeElement) {
          var index = parseInt(tcItems[i].getAttribute('tabindex'));
          index = index - 1;
          for (var j = 0; j < tcItems.length; j++) {
            if (tcItems[j].getAttribute('tabindex') == index.toString()) {
              tcItems[j].focus();
            }
          }
        }
      }
      break;

    case 40: // Down arrow - focus on the lower element
      for (var i = tcItems.length; i >= 0; i--) {
        if (tcItems[i] == document.activeElement) {
          var index = parseInt(tcItems[i].getAttribute('tabindex'));
          index = index + 1;
          for (var j = 0; j < tcItems.length; j++) {
            if (tcItems[j].getAttribute('tabindex') == index.toString()) {
              tcItems[j].focus();
            }
          }
        }
      }
      break;
  }
})
