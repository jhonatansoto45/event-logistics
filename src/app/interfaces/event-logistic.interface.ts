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
