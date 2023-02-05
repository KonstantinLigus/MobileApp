export const getHeaderTitle = (routeName) => {
  switch (routeName) {
    case "PostsScreen":
      return "Публикации";
      break;
    case "CreatePostsScreen":
      return "Создать публикацию";
      break;
    default:
      return "";
      break;
  }
};
