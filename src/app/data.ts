export interface Number{
    id?: number;
    number: string;
    text: string;

}

export interface Status{
    id?:number;
    icon:string;
    title:string;
    subTitle:string;
    specification:string;
}

export interface Review{
    id:number;
    profileImage: string;
    profileName: string;
    location: string;
    message: string;

}

export interface Connect{
  id?: number;
  title: string;
  specs: string;
}