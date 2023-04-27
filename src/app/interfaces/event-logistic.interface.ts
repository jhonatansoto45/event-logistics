export interface AuthUser {
  nombre: string;
  apellido: string;
  perfil: string;
  token: string;
}

export interface AuthLogin {
  usuario: string;
  contrasena: string;
}

