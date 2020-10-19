const path = require('path');
const data = require('./src/content/data.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/components/Bike/index.jsx`);

  data.bikes.forEach(bike => {
    const path = bike.page;

    createPage({
      path,
      component: template,
      context: {
        bike: bike
      }
    });
  });
};