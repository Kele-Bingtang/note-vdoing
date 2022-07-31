// nav
import javaNav from '../nav/javaNav'
import databaseNav from '../nav/databaseNav'
import frameNav from '../nav/frameNav'
import springNav from '../nav/springNav'
import developer from '../nav/developer'
// 微服务统一放在框架里
// import cloudNav from '../nav/cloudNav'
import toolNav from '../nav/toolNav'
import frontEnd from '../nav/frontEnd'
import indexNav from '../nav/indexNav'
import moreNav from '../nav/moreNav'

export default [
  {
    text: '首页', link: '/'
  },
  {
    text: '导航站', link: '/navigation/'
  },
  javaNav,   //Java导航
  databaseNav,  // 数据库导航
  frameNav,   // 框架导航
  springNav,  // Spring生态导航
  developer,
  // cloudNav,  // 微服务导航
  toolNav,  // 工具导航
  frontEnd,  // 前端导航
  moreNav,   // 更多导航
  indexNav,   //索引导航
  {
    text: '留言区', link: '/message-area/'
  },
]
