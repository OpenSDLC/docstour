interface Payload {
  [key: string]: string;
}
interface Role {
  [key: string]: string;
}

interface Error {
  status?: number;
  message?: string;
}


export {
  Payload,
  Role,
  Error
}