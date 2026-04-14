
interface NavLink {
    path:string,
    name:string,
    id:number | string,
}


export const NavLinks : NavLink[] = [
    {
        id:1,
        name:'shop',
        path:'/'
    },
    {
        id:2,
        name:'collection',
        path:'collection'
    },
    {
        id:3,
        name:'community',
        path:'/'
    },
    {
        id:4,
        name:'labs',
        path:'/'
    },
    {
        id:5,
        name:'Cart',
        path:'cart',
    },
    {
        id:6,
        name:'profile',
        path:'/profile',
    },
]