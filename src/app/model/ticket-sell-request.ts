interface TicketSellRequest {
    requestOwner: User,
    eventName: string,
    price: number,
    sellLocation: string,
    negotiable: string
}