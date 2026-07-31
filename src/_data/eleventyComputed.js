module.exports = {
  permalink: (data) => {
    // preserve original .html extension and avoid creating folders
    return `${data.page.filePathStem}.html`;
  }
};
