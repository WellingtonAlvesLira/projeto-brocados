import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
          light: {
            primary: colors.blue.accent1,
            red:colors.red.darken4,
            white: colors.white,
            green: colors.teal.darken2
          },
        },
      },
});
