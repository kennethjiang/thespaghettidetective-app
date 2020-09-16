export interface Member {
  clientId: any
  clientName: any
  login: any
  online: boolean
  lastOnline: Date
  photo?: any
  status?: any
  contactInfo?: any
}

export const exProfile: Member = {
  clientId: 2,
  clientName: 'Eugene Abramov',
  login: 'eabramov',
  online: true,
  lastOnline: new Date(),
  photo: undefined,
  status: undefined,
  contactInfo: undefined,
}

export enum MemberStatus {
  ONLINE = 'Online',
  OFFLINE = 'Last seen recently',
  AFK = 'Away from keyboard',
}
