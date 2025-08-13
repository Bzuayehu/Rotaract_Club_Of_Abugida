interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate?: Date;
}

export const addToGoogleCalendar = (event: CalendarEvent, onSuccess?: () => void) => {
  const startDate = event.startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const endDate = (event.endDate || new Date(event.startDate.getTime() + 2 * 60 * 60 * 1000)).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
  
  window.open(url, '_blank');
  if (onSuccess) onSuccess();
};

export const addToOutlookCalendar = (event: CalendarEvent, onSuccess?: () => void) => {
  const startDate = event.startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const endDate = (event.endDate || new Date(event.startDate.getTime() + 2 * 60 * 60 * 1000)).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${startDate}&enddt=${endDate}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
  
  window.open(url, '_blank');
  if (onSuccess) onSuccess();
};

export const addToAppleCalendar = (event: CalendarEvent, onSuccess?: () => void) => {
  const startDate = event.startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const endDate = (event.endDate || new Date(event.startDate.getTime() + 2 * 60 * 60 * 1000)).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const url = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  if (onSuccess) onSuccess();
};

export const showCalendarOptions = (event: CalendarEvent, onSuccess?: () => void) => {
  const options = [
    { name: 'Google Calendar', action: () => addToGoogleCalendar(event, onSuccess) },
    { name: 'Outlook Calendar', action: () => addToOutlookCalendar(event, onSuccess) },
    { name: 'Apple Calendar', action: () => addToAppleCalendar(event, onSuccess) },
  ];

  const menu = document.createElement('div');
  menu.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    padding: 1rem;
    z-index: 1001;
    min-width: 200px;
  `;

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
  `;

  const title = document.createElement('h3');
  title.textContent = 'Add to Calendar';
  title.style.cssText = `
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.1rem;
  `;
  menu.appendChild(title);

  options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option.name;
    button.style.cssText = `
      display: block;
      width: 100%;
      padding: 0.75rem;
      margin: 0.25rem 0;
      border: 1px solid #ddd;
      background: white;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    `;
    
    button.onmouseover = () => {
      button.style.backgroundColor = '#f5f5f5';
    };
    
    button.onmouseout = () => {
      button.style.backgroundColor = 'white';
    };
    
    button.onclick = () => {
      option.action();
      document.body.removeChild(overlay);
      document.body.removeChild(menu);
    };
    
    menu.appendChild(button);
  });

  overlay.onclick = () => {
    document.body.removeChild(overlay);
    document.body.removeChild(menu);
  };

  document.body.appendChild(overlay);
  document.body.appendChild(menu);
}; 