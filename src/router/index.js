import { createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/index.vue';
import Todos from '../pages/todos/index.vue';
import Todo from '../pages/todos/_id.vue';

const rouster = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Todos',
            name: 'Todos',
            component: Todos
        },
        {
            path: '/todos/:id',
            name: 'Todo',
            component: Todo
        }
    ]
})
// 1. /home 2. todos 3. todos/:id
export default rouster