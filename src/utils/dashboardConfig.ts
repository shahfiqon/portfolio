import data from '../data/dashboard.json';
// for navigation only
export type NavLink = {icon:string,label:string,href:string};


export type KPI  = {label:string, value:string};
export type ExperienceItem = {
    date:string;
    role:string;
    company:string;
    summary:string;
    tags:string[];   
}

export type SkillDatum = {name:string, value:number};

export interface DashboardData{
    nav:NavLink[];
    hero:{title:string;subtitle:string,labels:string[],ctaText:string,ctaLink:string};
    kips:KPI[];
    exprience:ExperienceItem[];
    

}

const fallback:DashboardData={
    nav:[],
    hero:{
        title:'Loading',
        subtitle:'Loading',
        labels:[],
        ctaText:'Loading Please wait!',
        ctaLink:'Loading Link Please wait!'
    },
    kips:[],
    exprience:[],
};

export function getDashboardData():DashboardData{
    try{
        return{...fallback,...data};
    }catch{
        return fallback;
    }
};