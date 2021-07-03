const encodeMessageToUrl = (message) => {
  return encodeURI(message);
};

export const eventMessage = encodeMessageToUrl(
  `Nxt.Tech is virtual event for students. Let's explore the journey of Technical and Non-Techinical world.`
);

export const eventTitle = encodeMessageToUrl("Nxt.Tech Virtual Event");

export const eventURL = `http://www.google.com/calendar/event?action=TEMPLATE&text=${eventTitle}&dates=20210717T100000+0100/20210718T120000+0100&details=${eventMessage}`;
