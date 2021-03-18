import {
  LayoutAuth,
  LayoutDefault,
  LayoutChat,
  LayoutMedia,
  RouteWrapper
} from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue')
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'home',
      group: 'apps',
      icon: ''
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          group: 'apps',
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/Dashboard.vue')
      },
      //calendar
      {
        path: '/calendar',
        meta: {
          title: 'calendar',
          group: 'apps',
          icon: 'mdi-calendar-check'
        },
        name: 'calendar',
        props: (route) => ({
          type: route.query.type
        }),
        component: () => import('@/views/Calendar.vue')
      },
      {
        path: '/chat',
        meta: {
          title: 'chat',
          group: 'apps',
          icon: 'mdi-chat',
          new: true
        },
        redirect: '/chat/messaging'
      },
      {
        path: '/media',
        meta: {
          title: 'media',
          group: 'apps',
          icon: 'mdi-image',
          new: true
        },
        redirect: '/media/file'
      },

      //element
      {
        path: '/element',
        component: RouteWrapper,
        meta: {
          title: 'element',
          icon: 'mdi-dots-square'
        },
        redirect: '/element/cascader',
        children: [
          {
            path: '/element/cascader',
            name: 'element.cascader',
            meta: {
              title: 'cascader',
              icon: 'mdi-alpha-c'
            },
            component: () => import('@/views/element/Cascader.vue')
          }
        ]
      },
      //acl
      {
        path: '/acl',
        component: RouteWrapper,
        redirect: '/acl/user/list',
        meta: {
          title: 'acl',
          icon: 'mdi-shield',
          group: 'cms'
        },
        children: [
          {
            path: '/acl/user',
            name: 'acl.user',
            meta: {
              title: 'users',
              icon: 'mdi-account-multiple'
            },
            redirect: '/acl/user/list',
            component: RouteWrapper,
            children: [
              {
                path: '/acl/user/list',
                name: 'acl.user.list',
                meta: {
                  title: 'user_list',
                  icon: 'mdi-account-multiple'
                },
                component: () => import('@/views/user/UserList.vue')
              },
              {
                path: '/acl/user/create',
                name: 'acl.user.create',
                meta: {
                  title: 'create_user',
                  icon: 'mdi-view-grid'
                },
                component: () => import('@/views/user/UserItem.vue')
              },
              {
                path: '/acl/user/item/:id',
                name: 'acl.user.edit',
                meta: {
                  title: 'edit_user',
                  icon: 'mdi-view-grid'
                },
                props: true,
                component: () => import('@/views/user/UserItem.vue')
              }
            ]
          }
        ]
      },
      //widgets
      {
        path: '/widgets',
        component: RouteWrapper,
        meta: {
          title: 'widget',
          icon: 'mdi-widgets',
          group: 'advance'
        },
        redirect: '/widgets/social',
        children: [
          {
            path: '/widgets/social',
            name: 'SocialWidget',
            meta: {
              title: 'social',
              icon: 'mdi-face-profile'
            },
            component: () => import('@/views/widgets/Social.vue')
          },
          {
            path: '/widgets/statistic',
            name: 'StatisticWidget',
            meta: {
              title: 'statistic',
              icon: 'mdi-hexagon'
            },
            component: () => import('@/views/widgets/Statistic.vue')
          }
        ]
      },
      //form
      {
        path: '/forms',
        component: RouteWrapper,
        meta: {
          title: 'form',
          icon: 'mdi-form-textbox',
          group: 'advance'
        },
        redirect: '/forms/list',
        children: [
          {
            path: '/forms/basic',
            name: 'forms.basic',
            meta: {
              title: 'basic_form',
              icon: 'mdi-alpha-b'
            },
            component: () => import('@/views/form/BasicForm.vue')
          },
          {
            path: '/forms/stepper',
            name: 'forms.stepper',
            meta: {
              title: 'step_form',
              icon: 'mdi-alpha-s'
            },
            component: () => import('@/views/form/Steppers.vue')
          }
        ]
      },
      //chart
      {
        path: '/chart',
        component: RouteWrapper,
        meta: {
          title: 'chart',
          icon: 'mdi-chart-line',
          group: 'advance'
        },
        redirect: '/chart/echart',
        children: [
          {
            path: '/cart/echart',
            name: 'echart',
            meta: {
              title: 'echart',
              icon: 'mdi-paw'
            },
            component: () => import('@/views/chart/Echart.vue')
          },
          {
            path: '/cart/g2',
            name: 'g2',
            meta: {
              title: 'g2',
              icon: 'mdi-alpha-g'
            },
            component: () => import('@/views/chart/G2.vue')
          }
        ]
      },
      //email
      // {
      //   path: '/mail',
      //   component: () => import('@/views/mail/Index.vue'),
      //   meta: {
      //     title: 'mail',
      //     icon: 'mdi-email',
      //     group: 'email'
      //   },
      //   redirect: '/mail/inbox',
      //   children: [
      //     {
      //       path: '/mail/:category',
      //       name: 'mail.category',
      //       props: true,
      //       meta: {
      //         title: 'inbox',
      //         icon: 'mdi-view-list',
      //         hiddenInMenu: true
      //       },
      //       component: () => import('@/views/mail/Inbox.vue')
      //     },
      //     {
      //       path: '/mail/inbox',
      //       name: 'mail.inbox',
      //       meta: {
      //         title: 'inbox',
      //         icon: 'mdi-view-list'
      //       },
      //       component: () => import('@/views/mail/Inbox.vue')
      //     },
      //     {
      //       path: '/mail/inbox/:uuid',
      //       name: 'inbox',
      //       props: true,
      //       meta: {
      //         title: 'mail',
      //         icon: 'mdi-view-list',
      //         hiddenInMenu: true
      //       },
      //       component: () => import('@/views/mail/Read.vue')
      //     }
      //   ]
      // },

      {
        path: '/changelog',
        name: 'changelog',
        meta: {
          title: 'changelog',
          icon: 'mdi-timeline-text',
          hiddenInMenu: false
        },
        component: () => import('@/views/Changelog.vue')
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'access_denied',
          hiddenInMenu: true
        },
        component: () => import('@/views/error/Deny.vue')
      }
    ]
  },
  //media
  {
    path: '/media',
    meta: {
      title: 'media',
      icon: 'mdi-image'
    },
    name: 'media',
    component: LayoutMedia,
    redirect: '/media/file',
    children: [
      {
        path: '/media/file',
        name: 'media.index',
        meta: {
          title: 'media manager',
          icon: 'mdi-view'
        },
        component: () => import('@/views/media/MediaView.vue')
      },
      {
        path: '/media/:type',
        name: 'media.type',
        meta: {
          title: 'media manager',
          icon: 'mdi-view'
        },
        props: true,
        component: () => import('@/views/media/MediaView.vue')
      }
    ]
  },
  // chat app
  {
    path: '/chat',
    name: 'Chat',
    component: LayoutChat,
    redirect: {
      path: '/chat/messaging'
    },
    meta: {
      title: 'Chat',
      group: 'apps',
      icon: 'chat_bubble'
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        name: 'ChatMessaging',
        props: true,
        component: () => import('@/views/chat/ChatMessaging.vue')
      }
    ]
  }
]
