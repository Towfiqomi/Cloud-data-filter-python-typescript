export type CloudSummery = Readonly<{
    cloud_name: string,
    cloud_description: string,
    geo_latitude: number,
    geo_longitude: number,
    geo_region: string
}>

export type CloudData = Readonly<{
    clouds : ReadonlyArray<CloudSummery>
    pageInfo?: PageInfo
}>

export type PageInfo = Readonly<{
    total: number,
    hasNextPage : boolean,
    total_pages : number
}>

export type CloudFilters = Readonly<{
    regions : ReadonlyArray<string>
    providers: ReadonlyArray<string>
}>

export type CloudFiltersDataEntity = Readonly<{
    region? : string,
    provider?: string,
    distance?: boolean

}>