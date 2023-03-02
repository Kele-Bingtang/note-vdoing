// 索引导航
export default {
  text: '索引', link: '/archives/',
  items: [
    { 
      text: '本站',
      items: [
        { text: '分类', link: '/categories/' },
        { text: '标签', link: '/tags/' },
        { text: '归档', link: '/archives/' },
      ]
    },
    {
      text: '我的',
      items: [
        { text: '收藏', link: '/whell/web/' },
        { text: '关于', link: '/about/website/introduce/' },
        { text: 'Vue2-Admin', link: 'https://vue2-admin.youngkbt.cn/' },
        { text: 'Vue3-Admin（完善）', link: 'https://vue3-admin.youngkbt.cn/' },
      ]
    },
  ]
}

