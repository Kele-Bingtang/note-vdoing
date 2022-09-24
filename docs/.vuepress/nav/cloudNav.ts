// 微服务导航栏
export default {
  text: '微服务', link: '/clouds/',
  items: [
    {
      text: '注册中心',
      items: [
        { text: 'Eureka', link: '/eurake/' },
        { text: 'Zookeeper', link: '/zookeeper/' },
        { text: 'Consul', link: '/consul/' },
        { text: 'Nacos', link: '/nacos/' },
      ]
    },
    {
      text: '服务调用',
      items: [
        { text: 'Ribbon', link: '/ribbon/'},
        { text: 'OpenFeign', link: '/open-feign/' },
        { text: 'Steam', link: '/steam/' },
        
      ]
    },
    {
      text: '服务降级',
      items: [
        { text: 'Hystrix', link: '/hystrix/' },
        { text: 'Dubbo', link: '/dubbo/' },
        { text: 'Sentinel', link: '/sentinel/' },
        { text: 'Seata', link: '/seata/' },
      ]
    },
    {
      text: '服务网关',
      items: [
        { text:'Zuul', link: 'zuul'},
        { text: 'GatWay', link: '/gat-way/' },
      ]
    },
    {
      text: '服务配置',
      items: [
        { text: 'Config', link: '/config/' },
        { text: 'Nacos', link: '/nacos/' },
      ]
    },
    {
      text: '服务总栈',
      items: [
        { text: 'Bus', link: '/bus/' },
        { text: 'Nacos', link: '/nacos/' },
        { text: 'Sleuth+Zipkin', link: '/sleuth-zipkin/' },
      ]
    }
  ]
}