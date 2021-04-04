import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
    theme: {
        primary: '#F4F1DA',
        secondary:'#452E20',
        anyColor: '#0000'
    }
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
              primary: '#F4F1DA',
              secondary: '#452E20',
              accent: '#8c9eff',
              error: '#b71c1c',
              
            },
          },
    }
});
