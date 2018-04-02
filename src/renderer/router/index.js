import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'intro',
            component: require('@/components/IntroView/IntroView').default
        },
        {
            path: '/update',
            name: 'update',
            component: require('@/components/UpdateView/UpdateView').default
        },
        {
            path: '/welcome',
            name: 'welcome-view',
            component: require('@/components/WelcomeView').default
        },
        {
            path: '/inspire',
            name: 'inspire',
            component: require('@/components/InspireView').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
