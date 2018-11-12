import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Account from '@/components/Account'
import Settings from '@/components/Settings'
import Faq from '@/components/Faq'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Home', name: 'Home', component: Home},
    {path: '/Footer', name: 'Footer', component: Footer},
    {path: '/Nav', name: 'Nav', component: Nav},
    {path: '/Account', name: 'Account', component: Account},
    {path: '/Settings', name: 'Settings', component: Settings},
    {path: '/Faq', name: 'Faq', component: Faq}
  ]
})
