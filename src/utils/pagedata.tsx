import { FaPlay, FaChartPie, FaPlaystation, FaSignOutAlt } from 'react-icons/fa'

export interface linkSide {
    link_name:string;
    link_url:string;
    link_icon_name:any;
    link_id:number;
}
export const sideBarArr :linkSide[] = [
{
    link_name:'Home',
    link_url:'/',
    link_icon_name: <FaChartPie/>,
    link_id:1
},{
    link_name:'Album',
    link_url:'/albums',
    link_icon_name:<FaPlay/>,
    link_id:2
},{
    link_name:'Song',
    link_url:'/songs',
    link_icon_name:<FaPlaystation/>,
    link_id:3
},{
    link_name:'Genre',
    link_url:'/music/genre',
    link_icon_name:<FaPlaystation/>,
    link_id:4
},{
    link_name:'Sign out',
    link_url:'/logout',
    link_icon_name:<FaSignOutAlt/>,
    link_id:5
}]