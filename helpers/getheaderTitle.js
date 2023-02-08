export const getHeaderTitle = (routeName) => {
  switch (routeName) {
    case "PostsDafaultScreen":
      return "Публикации";
      break;
    case "CommentsScreen":
      return "Комментарии";
      break;
    case "MapScreen":
      return "Карты";
      break;
    default:
      return "";
      break;
  }
};
