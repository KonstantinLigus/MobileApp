export const getHeadersButtonChoice = {
  isOutLogBtn: (routeName) => {
    switch (routeName) {
      case "PostsScreen":
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
      default:
        return false;
        break;
    }
  },
};
