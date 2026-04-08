
interface NavLink {
    path:string,
    name:string,
    id:number | string,
}


export const NavLinks : NavLink[] = [
    {
        id:1,
        name:'shop',
        path:'/shop'
    },
    {
        id:2,
        name:'collection',
        path:'/collection'
    },
    {
        id:3,
        name:'community',
        path:'/community'
    },
    {
        id:4,
        name:'labs',
        path:'/labs'
    },
    {
        id:5,
        name:'Cart',
        path:'/Cart',
    },
    {
        id:6,
        name:'profile',
        path:'/profile',
    },
]