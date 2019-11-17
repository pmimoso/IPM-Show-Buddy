interface CompanyRequest {
    requestOwner: User,
    eventName: string,
    minAge: number,
    maxAge: number,
    sex: string[] 
}