# Configuración de credenciales para Nodemailer con Gmail

## Pasos para obtener el PSW_EMAIL
1. Ve a las **Contraseñas de Aplicaciones de Google**:  
   [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
2. Genera una contraseña específica para aplicaciones.
3. Usa el resultado (sin espacios) como `PSW_EMAIL`.

### Ejemplo de archivo `.env`:

```bash
# Correo asociado a tu cuenta Gmail
EMAIL=developer.testing123@gmail.com

# Contraseña generada desde Contraseñas de Aplicaciones
PSW_EMAIL=xyza12bc34def567ghij890klmnopqrs
```bash

<img src="portada.png"></img>