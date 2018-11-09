import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LogSign from '@/components/LogSign'
import Nav from '@/components/Nav'
import Account from '@/components/Account'
import Settings from '@/component/Settings'
import Faq from '@/components/Faq'
import EventFeed from '@/components/EventFeed'
import EventCreate from '@/components/EventCreate'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: 'Main/EventFeed', Name:'EventFeed', component: EventFeed},
    {path: 'Footer/EventCreate', Name:'EventCreate', component: EventCreate},
    {path: '/LogSign', name: 'LogSign', component: LogSign},
    {path: 'Header/Nav', name: 'Nav', component: Nav},
    {path: '/Nav/Account', name: 'Account', component: Account},
    {path: '/Nav/Settings', name: 'Settings', component: Settings},
    {path: '/Nav/Faq', name: 'Faq', component: Faq}
  ]
})
