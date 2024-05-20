const {green, blue} = require('kleur');

module.exports = {
  async apply() {
    return new Promise(resolve => {
      console.log('\n');
      console.log(
        'Lakh Virk React-Native Boilerplate initialized with success ! 🚀\n',
      );
      console.log(
        `${green(
          '-------------------------------------------\n' +
            ' | |        (  ___  )  | )    / ( |)     /| \n' +
            ' | |        | (   ) |  |  |  / (  | )   ( | \n' +
            ' | |        | (___) |  |  (_/ (   | (___) | \n' +
            ' | |        |  ___  |  |   _ (    | (___) | \n' +
            ' | |        | (   ) |  |  (   (   | )   ( | \n' +
            ' | (____/   | )   ( |  |  /    (  | (   ( | \n' +
            ' (_______/  |/     (|  |_/      ( |/     (| \n',
        )}`,
      );
      console.log(blue('  THE TYPESCRIPT VERSION 📘'));
      console.log('\n');

      console.log(
        '- 📚 If you need to read more about this boilerplate : https://github.com/lakhvirk/react-native-boilerplate',
      );
      console.log(
        '- 🤕 If you have some troubles : https://github.com/lakhvirk/react-native-boilerplate/issues',
      );
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/lakhvirk/react-native-boilerplate',
      );

      resolve();
    });
  },
};
