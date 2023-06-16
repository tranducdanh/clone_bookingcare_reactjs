export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-user', menus: [
            {
                {name: 'menu.admin.manage-doctor',link: '/system/user-manage'},
                subMenus: [
                    { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                    { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                ]
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
];