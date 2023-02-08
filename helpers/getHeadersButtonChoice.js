export const getHeadersButtonChoice = {
  isOutLogBtn: (routeName) => {
    switch (routeName) {
      case "PostsDafaultScreen":
        return true;
        break;
      default:
        return false;
        break;
    }
  },
  isBackArrBtn: (routeName) => {
    switch (routeName) {
      case "CreatePostsScreen":
        return true;
        break;
      case "CommentsScreen":
        return true;
        break;
      case "MapScreen":
        return true;
        break;
      default:
        return false;
        break;
    }
  },
};
