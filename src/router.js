import Vue from 'vue';
import Router from 'vue-router';

//Importando os components para a criação de rotas da aplicação.
import HomeBrocados from '@/components/home/HomeBrocadosPage.vue';
import PedidosBrocados from '@/components/pedidos/PedidosBrocados.vue'
import LoginBrocados from '@/components/login/LoginBrocadosPage.vue';






Vue.use(Router);

const routes = [
    {path: '/', name: 'HomeBrocados', component: HomeBrocados},
    {path: '/pedidos-brocados', name:'PedidosBrocados', component: PedidosBrocados},
    {path: '/login-brocados', name:'LoginBrocados ', component: LoginBrocados },




]

export default new Router({
    routes,
});