export type CloudSummery = Readonly<{
    cloud_name: string,
    cloud_description: string,
    geo_latitude: number,
    geo_longitude: number,
    geo_region: string
}>

export type CloudList = Readonly<{
    clouds : ReadonlyArray<CloudSummery>
}>
