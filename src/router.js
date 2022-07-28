import Vue from 'vue';
import Router from 'vue-router';

//Importando os components para a criação de rotas da aplicação.
import PedidosBrocados from '@/components/pedidos/PedidosBrocados.vue';
import HomeBrocados from '@/components/home/HomeBrocados.vue';



Vue.use(Router);

const routes = [
    {path: '/', name: 'HomeBrocados', component: HomeBrocados},
    {path: '/pedidos', name:'PedidosBrocados', component: PedidosBrocados},



]

export default new Router({
    routes,
});