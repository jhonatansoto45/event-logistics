export interface AuthUser {
  nombre: string;
  apellido: string;
  perfil: string;
  token?: string;
}

export interface AuthLogin {
  usuario: string;
  contrasena: string;
}

export interface CreateUserType {
  nombre: string;
  apellido: string;
  Correo: string;
  contrasena: string;
  usuario: string;
  perfil: number;
}

export enum Perfiles {
  administrador = 1,
  asistente = 2,
}

export interface MenuItem {
  name: string;
  route: string;
}

export interface CardItem {
  id: number;
  image: string;
  name: string;
  location: string;
  date: string;
  invited: number;
}
